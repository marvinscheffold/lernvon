"use server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/app/_utils/supabase/createSupabaseServerClient";
import { createSupabaseServiceRoleClient } from "@/app/_utils/supabase/createSupabaseServiceRoleClient";
import { httpResponseStatusCode } from "@/app/_utils/httpResponseStatusCode";
import { revalidatePath } from "next/cache";
import { PoolType } from "@/app/_utils/types/pool";
import { ServerActionResponseType } from "@/app/_utils/types/serverActionResponse";

const errorSchema = z.object({
  message: z.string(),
  code: z.number(),
  key: z.string(),
});

const payloadSchema = z.object({
  poolIds: z.number().array(),
});

export async function teacherCreateOrDeleteTeacherPoolsAction(payload: {
  poolIds: PoolType["id"][];
}): Promise<ServerActionResponseType> {
  try {
    const supabaseServiceRole = createSupabaseServiceRoleClient();

    const {
      data: { user },
      error: userError,
    } = await createSupabaseServerClient().auth.getUser();
    if (!user || userError) throw httpResponseStatusCode.Unauthorized;

    const { data: payloadVerified, error: payloadError } =
      payloadSchema.safeParse(payload);

    if (payloadError)
      throw {
        ...httpResponseStatusCode.BadRequest,
        message: payloadError.errors[0].message,
      };

    const { data: teacher } = await createSupabaseServiceRoleClient()
      .from("teacher")
      .select("id, pool(*)")
      .eq("userId", user.id)
      .single();

    if (!teacher) {
      throw {
        ...httpResponseStatusCode.BadRequest,
        message: "Teachers needs to exist",
      };
    }

    const poolIdsToRemove = teacher.pool
      .filter(
        (pool) => !payloadVerified.poolIds.some((poolId) => poolId === pool.id)
      )
      .map((pool) => pool.id);
    const poolIdsToAdd = payloadVerified.poolIds.filter(
      (poolId) => !teacher.pool.some((pool) => pool.id === poolId)
    );

    if (poolIdsToRemove.length > 0) {
      const deleteRequests = await Promise.all(
        poolIdsToRemove.map((poolId) =>
          supabaseServiceRole
            .from("teacherPool")
            .delete()
            .eq("poolId", poolId)
            .eq("teacherId", teacher.id)
        )
      );

      const deleteRequestWithError = deleteRequests.find(
        (deleteRequest) => deleteRequest.error
      );
      if (deleteRequestWithError && deleteRequestWithError.error) {
        throw {
          ...httpResponseStatusCode.InternalServerError,
          message: deleteRequestWithError.error.message,
        };
      }
    }

    if (poolIdsToAdd.length > 0) {
      const insertRequest = await supabaseServiceRole
        .from("teacherPool")
        .insert(
          poolIdsToAdd.map((poolId) => {
            return { poolId, teacherId: teacher.id };
          })
        );

      if (insertRequest.error) {
        throw {
          ...httpResponseStatusCode.InternalServerError,
          message: insertRequest.error.message,
        };
      }
    }

    revalidatePath("/");
    return httpResponseStatusCode.Ok;
  } catch (error) {
    if (typeof error === "object" && error !== null) {
      const { data: errorVerified } = errorSchema.safeParse(error);
      if (errorVerified) return errorVerified;
    }
    return httpResponseStatusCode.InternalServerError;
  }
}
