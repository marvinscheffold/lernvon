"use server";
import { createSupabaseServerClient } from "@/app/_utils/supabase/createSupabaseServerClient";
import { createSupabaseServiceRoleClient } from "@/app/_utils/supabase/createSupabaseServiceRoleClient";
import { httpResponseStatusCode } from "@/app/_utils/httpResponseStatusCode";
import { revalidatePath } from "next/cache";

export async function deleteTeacherAction() {
  try {
    const {
      data: { user },
      error: userError,
    } = await createSupabaseServerClient().auth.getUser();
    if (!user || userError) throw httpResponseStatusCode.Unauthorized;

    const deleteRequest = await createSupabaseServiceRoleClient()
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
