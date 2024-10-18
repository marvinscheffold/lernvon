import { User } from "@supabase/supabase-js";
import { getStripeServerClient } from "../../../../_utils/server/stripe";
import { NextRequest } from "next/server";

export type StripeSessionMetaDataType = {
  userId: string;
  stripePriceId: string;
};

export async function checkoutSessionCreateService({
  user,
  request,
  stripePriceId,
}: {
  user: User;
  request: NextRequest;
  stripePriceId: string;
}) {
  const session = await getStripeServerClient().checkout.sessions.create({
    line_items: [
      {
        price: stripePriceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `${request.nextUrl.origin}/?checkout-success=true`,
    cancel_url: `${request.nextUrl.origin}/?checkout-canceled=true`,
    automatic_tax: { enabled: true },
    metadata: {
      userId: user.id,
      stripePriceId,
    } as StripeSessionMetaDataType,
  });

  return session;
}
