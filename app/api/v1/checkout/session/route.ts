import { NextRequest } from "next/server";
import { checkoutSessionCreateController } from "../../../../_features/checkout/server/controllers/checkoutSessionCreateController";

export async function POST(request: NextRequest) {
  return await checkoutSessionCreateController(request);
}
