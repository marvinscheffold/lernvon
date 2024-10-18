import dayjs from "dayjs";
import { CalendarDateInformationType } from "../../types/calendarDateInformation";
import { httpResponseStatusCode } from "../../../../_utils/server/httpResponseStatusCode";
import { calendarDateInformationsBerlin } from "../data/calendarDateInformationsBerlin";

export async function calendarDateInformationsReadService({
  city,
  isUserSubscribed,
}: {
  city: string;
  isUserSubscribed: boolean;
}): Promise<CalendarDateInformationType[]> {
  if (city !== "berlin") throw new Error(httpResponseStatusCode.NotFound.key);

  let indexToday = null;
  calendarDateInformationsBerlin.forEach((cdi, index) => {
    if (dayjs(cdi.date).isSame(dayjs(), "day")) {
      indexToday = index;
    }
  });

  if (indexToday === null) {
    throw new Error(httpResponseStatusCode.InternalServerError.key);
  }

  const calendarDateInformations90DaysPastAnd365DaysFuture =
    calendarDateInformationsBerlin.slice(
      Math.max(indexToday - 89, 0),
      Math.min(indexToday + 365, calendarDateInformationsBerlin.length)
    );

  if (isUserSubscribed) {
    return calendarDateInformations90DaysPastAnd365DaysFuture.map((cdi) => {
      return { ...cdi, isHidden: false };
    });
  }

  return calendarDateInformations90DaysPastAnd365DaysFuture.map((cdi) => {
    const cdiDate = dayjs(cdi.date);
    if (cdiDate.isBefore(dayjs())) return { ...cdi, isHidden: false };

    if (cdiDate.isAfter(dayjs().add(45, "day")))
      return getHiddenCalendarDateInformation(cdi.date);

    if (
      cdiDate.date() === 7 ||
      cdiDate.date() === 14 ||
      cdiDate.date() === 21 ||
      cdiDate.date() === 22 ||
      cdiDate.date() === 28
    )
      return getHiddenCalendarDateInformation(cdi.date);

    return { ...cdi, isHidden: false };
  });
}

function getHiddenCalendarDateInformation(
  date: string
): CalendarDateInformationType {
  const isEventsVisible = Math.random() > 0.5;
  const isTimingVisible = Math.random() > 0.5;
  return {
    date,
    isHidden: true,
    events: isEventsVisible ? [{ name: "lorem ipsum", multiplier: 1 }] : [],
    timingFactors: isTimingVisible
      ? [{ name: "lorem ipsum", multiplier: 1 }]
      : [],
  };
}
