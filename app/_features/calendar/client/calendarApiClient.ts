import { axiosInstance } from "../../../_utils/client/axios";
import { CalendarDateInformationType } from "../types/calendarDateInformation";

const API_ROUTE = "/api/v1/calendar";

export async function readCalendarDateInformations({
  city,
  jwt,
}: {
  city: string;
  jwt: string | null;
}): Promise<CalendarDateInformationType[]> {
  const response = await axiosInstance.get(
    `${API_ROUTE}/date-information/${city}`,
    {
      headers: jwt ? { authorization: `Bearer ${jwt}` } : undefined,
    }
  );
  return response.data;
}
