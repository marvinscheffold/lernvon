import { Badge, Skeleton } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { ReactNode } from "react";
import { useCalendarDateInformationQuery } from "../hooks/useCalendarDateInformationQuery";
import { getPriceSuggestionForDate } from "../utils/getPriceSuggestionForDate";

type CalendarGridCellProps = {
  minimumPrice: number | null;
  city: string;
  date: Dayjs;
  isDateContentVisible: boolean;
  onClick: () => void;
};

export function CalendarGridCell({
  minimumPrice,
  city,
  date,
  isDateContentVisible,
  onClick,
}: CalendarGridCellProps) {
  const { data: calendarDateInformation, isLoading } =
    useCalendarDateInformationQuery({
      city,
      date,
    });
  const isToday = date.isSame(dayjs(), "day");

  function Container(children?: ReactNode) {
    return (
      <div className="h-32 w-full px-1 relative" onClick={onClick}>
        {isToday && (
          <div className="absolute inset-0.5 rounded-lg outline outline-2 outline-blue-500"></div>
        )}
        <div className="h-full px-2 py-1 border-t-2 border-gray-100">
          <div className="text-small text-right">{date.date()}</div>
          <div className="mt-3">{children}</div>
        </div>
      </div>
    );
  }

  if (!isDateContentVisible) return Container();

  if (calendarDateInformation) {
    const priceSuggestion = minimumPrice
      ? getPriceSuggestionForDate({
          minimumPrice,
          timingFactors: calendarDateInformation.timingFactors,
          events: calendarDateInformation.events,
        })
      : "?";

    return Container(
      <div className={`${calendarDateInformation.isHidden ? "blur-md" : ""}`}>
        <div className="text-2xl text-center">{priceSuggestion} €</div>
        <ul className="flex flex-col items-start">
          {calendarDateInformation.timingFactors.length >= 1 && (
            <li className="w-full flex gap-2">
              <Badge color="blue" />
              <span className="truncate">
                {calendarDateInformation.timingFactors.length === 1
                  ? calendarDateInformation.timingFactors[0].name
                  : `${calendarDateInformation.timingFactors.length} timing factors`}
              </span>
            </li>
          )}
          {calendarDateInformation.events.length >= 1 && (
            <li className="w-full flex gap-2">
              <Badge color="green" />
              <span className="truncate">
                {calendarDateInformation.events.length === 1
                  ? calendarDateInformation.events[0].name
                  : `${calendarDateInformation.events.length} events`}
              </span>
            </li>
          )}
        </ul>
      </div>
    );
  }

  if (isLoading)
    return Container(
      <div className="text-center">
        <Skeleton.Button active style={{ height: "28px", width: "64px" }} />
      </div>
    );

  return Container(<div className="text-center">No Data</div>);
}
