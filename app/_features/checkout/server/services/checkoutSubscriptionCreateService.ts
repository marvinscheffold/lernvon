import { User } from "@supabase/supabase-js";
import { supabaseServerClient } from "../../../../_utils/server/supabase";

export async function checkoutSubscriptionCreateService({
  userId,
  stripePriceId,
  stripeSubscriptionId,
}: {
  userId: User["id"];
  stripePriceId: string;
  stripeSubscriptionId: string;
}) {
  const { data, error } = await supabaseServerClient
    .from("subscription")
    .insert({ stripeSubscriptionId, userId, stripePriceId })
    .select();

  if (error) throw error;
  return data;
}
