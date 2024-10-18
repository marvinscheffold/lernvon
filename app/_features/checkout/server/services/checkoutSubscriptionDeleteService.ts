import { supabaseServerClient } from "../../../../_utils/server/supabase";

export async function checkoutSubscriptionDeleteService(
  stripeSubscriptionId: string
) {
  const { data, error } = await supabaseServerClient
    .from("subscription")
    .delete()
    .eq("stripeSubscriptionId", stripeSubscriptionId)
    .select();

  if (error) throw error;
  return data;
}
