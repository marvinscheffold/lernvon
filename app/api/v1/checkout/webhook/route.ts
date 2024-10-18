import { NextRequest } from "next/server";
import { checkoutWebhookController } from "../../../../_features/checkout/server/controllers/checkoutWebhookController";

export async function POST(request: NextRequest) {
  return await checkoutWebhookController(request);
}
