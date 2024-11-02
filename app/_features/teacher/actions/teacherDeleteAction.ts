"use server";
import { createSupabaseServerClient } from "@/app/_utils/supabase/createSupabaseServerClient";
import { createSupabaseAdminClient } from "@/app/_utils/supabase/createSupabaseAdminClient";
import { httpResponseStatusCode } from "@/app/_utils/httpResponseStatusCode";
import { revalidatePath } from "next/cache";

export async function teacherDeleteAction() {
  try {
    const {
      data: { user },
      error: userError,
    } = await createSupabaseServerClient().auth.getUser();
    if (!user || userError) throw httpResponseStatusCode.Unauthorized;

    const deleteRequest = await createSupabaseAdminClient()
      .from("teacher")
      .delete()
      .eq("userId", user.id);

    if (deleteRequest.error)
      throw {
        ...httpResponseStatusCode.InternalServerError,
        message: deleteRequest.error.message,
      };

    revalidatePath("/");
    return httpResponseStatusCode.Ok;
  } catch (error) {
    console.log(error);
    return error;
  }
}
