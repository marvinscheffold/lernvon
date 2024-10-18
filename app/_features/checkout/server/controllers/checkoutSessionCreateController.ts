import { NextRequest, NextResponse } from "next/server";
import { createNextResponseError } from "../../../../_utils/server/createNextResponseError";
import { httpResponseStatusCode } from "../../../../_utils/server/httpResponseStatusCode";
import { checkoutSessionCreateService } from "../services/checkoutSessionCreateService";
import { checkoutSubscriptionReadService } from "../services/checkoutSubscriptionReadService";
import { readAuthUserServerSide } from "../../../auth/server/readAuthUserServerSide";

export async function checkoutSessionCreateController(
  request: NextRequest
): Promise<NextResponse> {
  try {
    const user = await readAuthUserServerSide();
    if (!user)
      return new NextResponse(undefined, {
        status: httpResponseStatusCode.Unauthorized.code,
        statusText: httpResponseStatusCode.Unauthorized.message,
      });

    const stripePriceId = process.env.STRIPE_PRICE_ID!;
    const subscription = await checkoutSubscriptionReadService({
      userId: user.id,
      stripePriceId,
    });

    if (subscription) {
      return new NextResponse(undefined, {
        status: httpResponseStatusCode.Conflict.code,
        statusText: httpResponseStatusCode.Conflict.message,
      });
    }

    const checkoutSession = await checkoutSessionCreateService({
      user: user,
      request,
      stripePriceId,
    });

    if (!checkoutSession) {
      return new NextResponse(undefined, {
        status: httpResponseStatusCode.InternalServerError.code,
        statusText: httpResponseStatusCode.InternalServerError.message,
      });
    }

    return new NextResponse(JSON.stringify(checkoutSession), {
      status: httpResponseStatusCode.Ok.code,
      statusText: httpResponseStatusCode.Ok.message,
    });
  } catch (error) {
    console.log(error);
    return createNextResponseError(error);
  }
}
