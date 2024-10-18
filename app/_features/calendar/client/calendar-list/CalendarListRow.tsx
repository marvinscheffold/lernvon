import { Badge, Skeleton } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { ReactNode } from "react";
import { getPriceSuggestionForDate } from "../utils/getPriceSuggestionForDate";
import { useCalendarDateInformationQuery } from "../hooks/useCalendarDateInformationQuery";

type CalendarListRowProps = {
  minimumPrice: number | null;
  city: string;
  date: Dayjs;
  isDateContentVisible: boolean;
  onClick: () => void;
};

export function CalendarListRow({
  minimumPrice,
  city,
  date,
  isDateContentVisible,
  onClick,
}: CalendarListRowProps) {
  const { data: calendarDateInformation, isLoading } =
    useCalendarDateInformationQuery({
      city,
      date,
    });
  const isToday = date.isSame(dayjs(), "day");

  function Container(children?: ReactNode) {
    return (
      <li
        className="h-20 w-full relative border-b last:border-b-0 px-4 flex gap-5 items-center"
        onClick={onClick}
      >
        {isToday && (
          <div className="absolute inset-0.5 rounded-lg outline outline-2 outline-blue-500"></div>
        )}
        <div className="flex flex-col items-center w-7">
          <span className="text-xl text-gray-600">{date.date()}</span>
          <span className="text-xs font-bold text-gray-600">
            {date.toDate().toLocaleString("en-US", { weekday: "short" })}
          </span>
        </div>
        {children}
      </li>
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
      <div
        className={`flex-grow flex h-full items-center ${
          calendarDateInformation.isHidden ? "blur-md" : ""
        }`}
      >
        <ul className="flex-grow flex flex-col items-start">
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
        <span className="text-2xl">{priceSuggestion} €</span>
      </div>
    );
  }

  if (isLoading)
    return Container(
      <div className="flex-grow flex justify-end">
        <Skeleton.Button active style={{ height: "28px", width: "72px" }} />
      </div>
    );

  return Container(<div className="text-center">No Data</div>);
}
