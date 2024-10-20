"use server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/app/_utils/supabase/createSupabaseServerClient";
import { createSupabaseServiceRoleClient } from "@/app/_utils/supabase/createSupabaseServiceRoleClient";
import { httpResponseStatusCode } from "@/app/_utils/httpResponseStatusCode";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const teacherSchema = z.object({
  name: z
    .string({ invalid_type_error: "name must be a string" })
    .min(3, "name has to be at least 3 characters long")
    .nullable(),
  price_per_hour: z.coerce
    .number({ invalid_type_error: "price_per_hour must be a number" })
    .positive("pricePerHour needs to be positive")
    .nullable(),
  email: z
    .string({ invalid_type_error: "email must be a string" })
    .email("email needs to be valid")
    .nullable(),
  about: z
    .string()
    .min(3, "about has to be at least 3 characters long")
    .max(1000, "about can be maximum of 1000 characters long")
    .nullable(),
});
const teacherImageFileSchema = z
  .any()
  .refine((file) => file?.size <= MAX_FILE_SIZE, `max image size is 500kB`)
  .refine(
    (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
    "only .jpg, .jpeg, .png and .webp formats are supported"
  )
  .nullable();

export async function upsertTeacherAction(formData: FormData) {
  try {
    const supabaseServiceRole = createSupabaseServiceRoleClient();
    const supabase = createSupabaseServerClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (!user || userError) return httpResponseStatusCode.Unauthorized;

    const { data: teacherSchemaData, error: teacherSchemaError } =
      teacherSchema.safeParse({
        name: formData.get("name"),
        price_per_hour: formData.get("pricePerHour"),
        email: formData.get("email"),
        about: formData.get("about"),
      });

    if (teacherSchemaError) {
      return {
        ...httpResponseStatusCode.BadRequest,
        message: teacherSchemaError.errors[0].message,
      };
    }

    const {
      data: teacherImageFileSchemaData,
      error: teacherImageFileSchemaError,
    } = teacherImageFileSchema.safeParse(formData.get("imageFile"));

    if (teacherImageFileSchemaError) {
      return {
        ...httpResponseStatusCode.BadRequest,
        message: teacherImageFileSchemaError.errors[0].message,
      };
    }

    let teacher = null;
    const readRequest = await supabaseServiceRole
      .from("teacher")
      .select()
      .eq("user_id", user.id)
      .single();
    if (readRequest.data) {
      teacher = readRequest.data;
    }

    if (!teacher) {
      const insertRequest = await supabaseServiceRole
        .from("teacher")
        .insert({
          user_id: user.id,
        })
        .select()
        .single();

      if (insertRequest.error || !insertRequest.data)
        return { error: insertRequest.error };
      teacher = insertRequest.data;
    }

    let image_url = null;
    if (teacherImageFileSchemaData) {
      const { data, error } = await supabaseServiceRole.storage
        .from("teacher")
        .upload(`${teacher.id}/image`, teacherImageFileSchemaData, {
          upsert: true,
        });
      if (error) return httpResponseStatusCode.InternalServerError;

      const {
        data: { publicUrl },
      } = supabase.storage.from("teacher").getPublicUrl(data.path);
      image_url = publicUrl;
    }

    const updateRequest = await supabaseServiceRole
      .from("teacher")
      .update({ ...teacherSchemaData, image_url })
      .eq("id", teacher.id);

    if (updateRequest.error) return httpResponseStatusCode.InternalServerError;

    return httpResponseStatusCode.Ok;
  } catch (error) {
    return httpResponseStatusCode.InternalServerError;
  }
}
