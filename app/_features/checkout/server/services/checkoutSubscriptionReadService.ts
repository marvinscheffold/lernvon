import { User } from "@supabase/supabase-js";
import { supabaseServerClient } from "../../../../_utils/server/supabase";

export async function checkoutSubscriptionReadService({
  userId,
  stripePriceId,
}: {
  userId: User["id"];
  stripePriceId: string;
}) {
  const { data, error } = await supabaseServerClient
    .from("subscription")
    .select()
    .eq("userId", userId)
    .eq("stripePriceId", stripePriceId)
    .maybeSingle();

  if (error) throw error;
  return data;
}
