"use server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/app/_utils/supabase/createSupabaseServerClient";
import { createSupabaseServiceRoleClient } from "@/app/_utils/supabase/createSupabaseServiceRoleClient";
import { httpResponseStatusCode } from "@/app/_utils/httpResponseStatusCode";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";
import { TeacherType } from "@/app/_utils/types/teacher";
import { getObjectFromFormData } from "@/app/_utils/getObjectFromFormData";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const payloadSchema = z.object({
  name: z
    .string({ invalid_type_error: "name must be a string" })
    .min(3, "name has to be at least 3 characters long")
    .nullable()
    .optional(),
  pricePerHour: z.coerce
    .number({ invalid_type_error: "price_per_hour must be a number" })
    .positive("pricePerHour needs to be positive")
    .nullable()
    .optional(),
  email: z
    .string({ invalid_type_error: "email must be a string" })
    .email("email needs to be valid")
    .nullable()
    .optional(),
  about: z
    .string()
    .min(3, "about has to be at least 3 characters long")
    .max(1000, "about can be maximum of 1000 characters long")
    .nullable()
    .optional(),
  videoThumbnailFile: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `max image size is 500kB`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "only .jpg, .jpeg, .png and .webp formats are supported"
    )
    .optional(),
});

export async function teacherUpsertAction(payload: FormData) {
  try {
    const supabaseServiceRole = createSupabaseServiceRoleClient();
    const supabase = createSupabaseServerClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (!user || userError) throw httpResponseStatusCode.Unauthorized;

    const { data: payloadVerified, error: payloadError } =
      payloadSchema.safeParse(getObjectFromFormData(payload));

    if (payloadError)
      throw {
        ...httpResponseStatusCode.BadRequest,
        message: payloadError.errors[0].message,
      };

    let teacher = null;
    const readRequest = await supabaseServiceRole
      .from("teacher")
      .select()
      .eq("userId", user.id)
      .single();
    teacher = readRequest.data;

    if (!teacher) {
      const insertRequest = await supabaseServiceRole
        .from("teacher")
        .insert({
          userId: user.id,
        })
        .select()
        .single();

      if (insertRequest.error || !insertRequest.data)
        throw {
          ...httpResponseStatusCode.InternalServerError,
          message: insertRequest.error.message,
        };

      teacher = insertRequest.data;
    }

    let videoThumbnailPath = null;
    if (payloadVerified.videoThumbnailFile) {
      videoThumbnailPath = await uploadVideoThumbnailFile({
        teacherId: teacher.id,
        videoThumbnailFile: payloadVerified.videoThumbnailFile,
      });
    }

    const updateRequest = await supabaseServiceRole
      .from("teacher")
      .update({
        name: payloadVerified.name,
        pricePerHour: payloadVerified.pricePerHour,
        email: payloadVerified.email,
        videoThumbnailPath: videoThumbnailPath ?? undefined,
      })
      .eq("id", teacher.id);

    console.log("heyyy", updateRequest.error);

    if (updateRequest.error)
      throw {
        ...httpResponseStatusCode.InternalServerError,
        message: updateRequest.error.message,
      };

    revalidatePath("/");
    return httpResponseStatusCode.Ok;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function uploadVideoThumbnailFile({
  teacherId,
  videoThumbnailFile,
}: {
  teacherId: TeacherType["id"];
  videoThumbnailFile: File;
}): Promise<string> {
  const folderName = "video-thumbnail";
  const supabaseServiceRole = createSupabaseServiceRoleClient();

  const { data: list } = await supabaseServiceRole.storage
    .from("teacher")
    .list(`${teacherId}/${folderName}`);

  if (list) {
    const filesToRemove = list.map(
      (f) => `${teacherId}/${folderName}/${f.name}`
    );
    await supabaseServiceRole.storage.from("teacher").remove(filesToRemove);
  }

  const newVideoThumbnailPath = `${teacherId}/${folderName}/${uuidv4()}`;
  const { error } = await supabaseServiceRole.storage
    .from("teacher")
    .upload(newVideoThumbnailPath, videoThumbnailFile, {
      upsert: true,
    });

  if (error) {
    throw {
      ...httpResponseStatusCode.InternalServerError,
      message: error.message,
    };
  }

  return newVideoThumbnailPath;
}
