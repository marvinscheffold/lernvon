import { useQuery } from "@tanstack/react-query";
import dayjs, { Dayjs } from "dayjs";
import { calendarQueries } from "../calendarQueries";
import { authQueries } from "../../../auth/authQueries";

export function useCalendarDateInformationQuery({
  city,
  date,
}: {
  city: string;
  date: Dayjs;
}) {
  const { data: session } = useQuery(authQueries.session());
  const query = useQuery(
    calendarQueries.list({ city, jwt: session?.access_token || null })
  );

  return {
    ...query,
    data:
      query.data === undefined
        ? undefined
        : query.data.find((calendarDateInformation) =>
            dayjs(calendarDateInformation.date).isSame(date, "day")
          ),
  };
}
