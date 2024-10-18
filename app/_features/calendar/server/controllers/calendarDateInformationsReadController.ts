import { NextRequest, NextResponse } from "next/server";
import { calendarDateInformationsReadService } from "../services/calendarDateInformationsReadService";
import { httpResponseStatusCode } from "../../../../_utils/server/httpResponseStatusCode";
import { createNextResponseError } from "../../../../_utils/server/createNextResponseError";
import { checkoutSubscriptionReadService } from "../../../checkout/server/services/checkoutSubscriptionReadService";
import { readAuthUserServerSide } from "../../../auth/server/readAuthUserServerSide";

export async function calendarDateInformationsReadController(
  request: NextRequest,
  context: {
    params: {
      city: string;
    };
  }
): Promise<NextResponse> {
  try {
    const user = await readAuthUserServerSide();

    if (!user) {
      return new NextResponse(
        JSON.stringify(
          await calendarDateInformationsReadService({
            city: context.params.city,
            isUserSubscribed: false,
          })
        ),
        {
          status: httpResponseStatusCode.Ok.code,
          statusText: httpResponseStatusCode.Ok.message,
        }
      );
    }

    const stripePriceId = process.env.STRIPE_PRICE_ID!;
    const subscription = await checkoutSubscriptionReadService({
      userId: user.id,
      stripePriceId,
    });

    return new NextResponse(
      JSON.stringify(
        await calendarDateInformationsReadService({
          city: context.params.city,
          isUserSubscribed: Boolean(subscription),
        })
      ),
      {
        status: httpResponseStatusCode.Ok.code,
        statusText: httpResponseStatusCode.Ok.message,
      }
    );
  } catch (error) {
    return createNextResponseError(error);
  }
}
