import { User } from "@supabase/supabase-js";
import { supabaseServerClient } from "../../../../_utils/server/supabase";

export async function checkoutPaymentCreateService({
  userId,
  stripePriceId,
  stripeCurrency,
  stripeCustomerDetails,
  stripeAmountTotal,
  stripeSubscriptionId,
}: {
  userId: User["id"];
  stripePriceId: string;
  stripeCurrency: string | null;
  stripeCustomerDetails: object | null;
  stripeAmountTotal: number | null;
  stripeSubscriptionId: string | null;
}) {
  const { data, error } = await supabaseServerClient
    .from("payment")
    .insert({
      userId,
      stripePriceId,
      stripeCurrency,
      stripeCustomerDetails,
      stripeAmountTotal,
      stripeSubscriptionId,
    })
    .select();

  if (error) throw error;
  return data;
}
