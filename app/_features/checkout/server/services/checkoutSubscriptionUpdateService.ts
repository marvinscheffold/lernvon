import { supabaseServerClient } from "../../../../_utils/server/supabase";

type SubscriptionUpdateType = {
  isActive?: boolean;
  isCanceled?: boolean;
  canceledAt?: string | null;
  cancelAt?: string | null;
  shouldCancelAt?: boolean;
};

export async function checkoutSubscriptionUpdateService(
  stripeSubscriptionId: string,
  {
    isActive,
    isCanceled,
    canceledAt,
    cancelAt,
    shouldCancelAt,
  }: SubscriptionUpdateType
) {
  const { data, error } = await supabaseServerClient
    .from("subscription")
    .update({ isActive, isCanceled, canceledAt, cancelAt, shouldCancelAt })
    .eq("stripeSubscriptionId", stripeSubscriptionId)
    .select();

  if (error) throw error;
  return data;
}
