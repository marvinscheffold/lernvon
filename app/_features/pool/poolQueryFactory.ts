import { createSupabaseBrowserClient } from "@/app/_utils/supabase/createSupabaseBrowserClient";
import { PoolType } from "@/app/_utils/types/pool";
import { queryOptions } from "@tanstack/react-query";

export const poolQueryKeyBase = "pool";

export const poolQueries = {
  all: () => [poolQueryKeyBase],
  lists: () => [poolQueries.all(), "list"],
  list: () =>
    queryOptions({
      queryKey: [poolQueries.lists()],
      queryFn: async () => {
        const { data, error } = await createSupabaseBrowserClient()
          .from("pool")
          .select();

        if (error) throw error;
        return data;
      },
    }),
  details: () => [poolQueries.all(), "details"],
  detail: (poolId: PoolType["id"] | null) =>
    queryOptions({
      queryKey: [poolQueries.details(), poolId],
      queryFn: async () => {
        const { data, error } = await createSupabaseBrowserClient()
          .from("pool")
          .select()
          .eq("id", poolId || 0)
          .single();

        if (error) throw error;
        return data;
      },
      enabled: poolId !== null,
    }),
};
