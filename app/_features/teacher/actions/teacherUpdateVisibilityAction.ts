"use server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/app/_utils/supabase/createSupabaseServerClient";
import { createSupabaseAdminClient } from "@/app/_utils/supabase/createSupabaseAdminClient";
import { httpResponseStatusCode } from "@/app/_utils/httpResponseStatusCode";
import { revalidatePath } from "next/cache";
import { getObjectFromFormData } from "@/app/_utils/getObjectFromFormData";

const payloadSchema = z.object({
  isVisible: z
    .string()
    .refine((value) => value === "true" || value === "false", {
      message: "Value must be a boolean",
    })
    .transform((value) => value === "true"),
});

export async function teacherUpdateVisibilityAction(payload: FormData) {
  try {
    const supabaseServiceRole = createSupabaseAdminClient();

    const {
      data: { user },
      error: userError,
    } = await createSupabaseServerClient().auth.getUser();
    if (!user || userError) throw httpResponseStatusCode.Unauthorized;

    const { data: payloadVerified, error: payloadError } =
      payloadSchema.safeParse(getObjectFromFormData(payload));

    if (payloadError) {
      throw {
        ...httpResponseStatusCode.BadRequest,
        message: payloadError.errors[0].message,
      };
    }

    const { data: teacher } = await supabaseServiceRole
      .from("teacher")
      .select()
      .eq("userId", user.id)
      .single();

    if (!teacher) {
      throw {
        ...httpResponseStatusCode.BadRequest,
        message: "teacher needs to exist",
      };
    }

    if (
      teacher.name === null ||
      teacher.email === null ||
      teacher.pricePerHour === null ||
      teacher.videoThumbnailPath === null
    ) {
      throw {
        ...httpResponseStatusCode.BadRequest,
        message: "mandatory information needs to be set to change visibility",
      };
    }

    const updateRequest = await supabaseServiceRole
      .from("teacher")
      .update({
        isVisible: payloadVerified.isVisible,
      })
      .eq("id", teacher.id);

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
