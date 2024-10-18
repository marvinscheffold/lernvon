import { queryOptions } from "@tanstack/react-query";
import { readCalendarDateInformations } from "./calendarApiClient";

export const calendarQueryKeyBase = "calendar";

export const calendarQueries = {
  all: () => [calendarQueryKeyBase] as const,
  lists: () => [...calendarQueries.all(), "list"],
  list: ({ city, jwt }: { city: string; jwt: string | null }) =>
    queryOptions({
      queryKey: [...calendarQueries.lists(), city, jwt],
      queryFn: () => readCalendarDateInformations({ city, jwt }),
    }),
};
