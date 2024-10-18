import { NextRequest, NextResponse } from "next/server";
import { createNextResponseError } from "../../../../_utils/server/createNextResponseError";
import { httpResponseStatusCode } from "../../../../_utils/server/httpResponseStatusCode";
import { headers } from "next/headers";
import Stripe from "stripe";
import { getStripeServerClient } from "../../../../_utils/server/stripe";
import { checkoutSubscriptionCreateService } from "../services/checkoutSubscriptionCreateService";
import { StripeSessionMetaDataType } from "../services/checkoutSessionCreateService";
import { checkoutPaymentCreateService } from "../services/checkoutPaymentCreateService";
import { checkoutSubscriptionUpdateService } from "../services/checkoutSubscriptionUpdateService";
import { checkoutSubscriptionDeleteService } from "../services/checkoutSubscriptionDeleteService";
import { getIsoStringFromUnixTimeStamp } from "../../../../_utils/server/getIsoStringFromUnixTimeStamp";

export async function checkoutWebhookController(
  request: NextRequest
): Promise<NextResponse> {
  try {
    const body = await request.text();
    const endpointSecret = process.env.STRIPE_SECRET_WEBHOOK_KEY!;
    const sig = headers().get("stripe-signature") as string;
    const event: Stripe.Event = getStripeServerClient().webhooks.constructEvent(
      body,
      sig,
      endpointSecret
    );

    if (event.type === "checkout.session.completed") {
      const data = event.data.object;

      const { userId, stripePriceId } =
        data.metadata as StripeSessionMetaDataType;

      const stripeSubscriptionId =
        data.subscription && typeof data.subscription === "string"
          ? data.subscription
          : null;

      await checkoutPaymentCreateService({
        userId,
        stripePriceId,
        stripeCurrency: data.currency,
        stripeCustomerDetails: data.customer_details,
        stripeAmountTotal: data.amount_total,
        stripeSubscriptionId,
      });

      if (!stripeSubscriptionId)
        return new NextResponse("stripeSubscriptionId invalid", {
          status: httpResponseStatusCode.InternalServerError.code,
          statusText: httpResponseStatusCode.InternalServerError.message,
        });

      await checkoutSubscriptionCreateService({
        userId,
        stripePriceId,
        stripeSubscriptionId,
      });

      return new NextResponse("Payment and Subscription added", {
        status: httpResponseStatusCode.Ok.code,
        statusText: httpResponseStatusCode.Ok.message,
      });
    }

    if (event.type === "customer.subscription.updated") {
      const data = event.data.object;

      await checkoutSubscriptionUpdateService(data.id, {
        isCanceled: data.status === "canceled",
        canceledAt: data.canceled_at
          ? getIsoStringFromUnixTimeStamp(data.canceled_at)
          : undefined,
        shouldCancelAt: data.cancel_at_period_end,
        cancelAt: data.cancel_at
          ? getIsoStringFromUnixTimeStamp(data.cancel_at)
          : undefined,
      });
      return new NextResponse("Subscription updated", {
        status: httpResponseStatusCode.Ok.code,
        statusText: httpResponseStatusCode.Ok.message,
      });
    }

    if (event.type === "customer.subscription.deleted") {
      const data = event.data.object;
      await checkoutSubscriptionDeleteService(data.id);
      return new NextResponse("Subscription deleted", {
        status: httpResponseStatusCode.Ok.code,
        statusText: httpResponseStatusCode.Ok.message,
      });
    }

    return new NextResponse(undefined, {
      status: httpResponseStatusCode.InternalServerError.code,
      statusText: httpResponseStatusCode.InternalServerError.message,
    });
  } catch (error) {
    console.log("error", error);
    return createNextResponseError(error);
  }
}
