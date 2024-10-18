import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Dispatch, SetStateAction } from "react";
import { textBig } from "../../../../_tailwind-classes/texts";
import { CalendarListRow } from "./CalendarListRow";
import { useCalendarDateModal } from "../CalendarContext";

type CalendarListProps = {
  city: string;
  minimumPrice: number | null;
  visibleDate: Dayjs;
  setVisibleDate: Dispatch<SetStateAction<Dayjs>>;
};

export function CalendarList({
  city,
  minimumPrice,
  visibleDate,
  setVisibleDate,
}: CalendarListProps) {
  const { setCalendarDateModalState } = useCalendarDateModal();
  const datesInMonth = Array.from(Array(visibleDate.daysInMonth())).map(
    (_, index) => visibleDate.date(1).add(index, "day")
  );

  return (
    <div className="flex flex-col">
      <div className="py-6 flex gap-4 items-center sticky top-0 bg-white z-10">
        <Button onClick={() => setVisibleDate(dayjs())}>Today</Button>
        <div className="flex items-center gap-2">
          <Button
            size="large"
            type="text"
            icon={<ArrowLeftOutlined />}
            onClick={() => {
              setVisibleDate((visibleDate) => visibleDate.subtract(1, "month"));
            }}
          />
          <Button
            size="large"
            type="text"
            icon={<ArrowRightOutlined />}
            onClick={() => {
              setVisibleDate((visibleDate) => visibleDate.add(1, "month"));
            }}
            disabled={
              visibleDate.isSame(dayjs().add(1, "year"), "month") &&
              visibleDate.isSame(dayjs().add(1, "year"), "year")
            }
          />
        </div>
        <div className={`${textBig}`}>
          {visibleDate.toDate().toLocaleString("en-US", { month: "long" })}{" "}
          {visibleDate.year()}
        </div>
      </div>
      <ul>
        {datesInMonth.map((date, i) => (
          <CalendarListRow
            key={i}
            city={city}
            minimumPrice={minimumPrice}
            isDateContentVisible={true}
            date={date}
            onClick={() => {
              setCalendarDateModalState({
                isOpen: true,
                onClose: () =>
                  setCalendarDateModalState((state) => {
                    return { ...state, isOpen: false };
                  }),
                date,
                minimumPrice,
                city,
              });
            }}
          />
        ))}
      </ul>
    </div>
  );
}
