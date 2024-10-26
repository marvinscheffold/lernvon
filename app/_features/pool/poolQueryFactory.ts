import { createSupabaseBrowserClient } from "@/app/_utils/supabase/createSupabaseBrowserClient";
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
};
