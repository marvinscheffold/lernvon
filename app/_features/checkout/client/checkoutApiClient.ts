import Stripe from "stripe";
import { axiosInstance } from "../../../_utils/client/axios";
import { supabaseBrowserClient } from "../../../_utils/client/supabase";
import { SubscriptionType } from "../types/subscription";

const API_ROUTE = "/api/v1/checkout";

export async function createCheckoutSession(
  jwt: string
): Promise<Stripe.Checkout.Session> {
  const response = await axiosInstance.post(`${API_ROUTE}/session`, undefined, {
    headers: { authorization: `Bearer ${jwt}` },
  });
  return response.data;
}

export async function readCheckoutSubscription(): Promise<SubscriptionType | null> {
  const { data, error } = await supabaseBrowserClient
    .from("subscription")
    .select()
    .maybeSingle();

  if (error) throw error;
  return data;
}
