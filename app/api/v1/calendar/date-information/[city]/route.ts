import { NextRequest } from "next/server";
import { calendarDateInformationsReadController } from "../../../../../_features/calendar/server/controllers/calendarDateInformationsReadController";

export async function GET(
  request: NextRequest,
  context: {
    params: {
      city: string;
    };
  }
) {
  return await calendarDateInformationsReadController(request, context);
}
