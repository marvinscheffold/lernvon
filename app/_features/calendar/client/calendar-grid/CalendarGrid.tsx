import "./calendarGrid.css";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Button, Calendar as CalendarAntd } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Dispatch, SetStateAction } from "react";
import { CalendarGridCell } from "./CalendarGridCell";
import { useCalendarDateModal } from "../CalendarContext";
import { textBig } from "../../../../_tailwind-classes/texts";

type CalendarGridProps = {
  city: string;
  minimumPrice: number | null;
  visibleDate: Dayjs;
  setVisibleDate: Dispatch<SetStateAction<Dayjs>>;
};

export function CalendarGrid({
  city,
  minimumPrice,
  visibleDate,
  setVisibleDate,
}: CalendarGridProps) {
  const { setCalendarDateModalState } = useCalendarDateModal();

  return (
    <CalendarAntd
      onChange={setVisibleDate}
      headerRender={({ value, onChange }) => {
        return (
          <div className="flex gap-6 items-center py-6 sticky top-0 bg-white z-10">
            <Button size="large" onClick={() => onChange(dayjs())}>
              Today
            </Button>
            <div className="flex items-center gap-2">
              <Button
                size="large"
                type="text"
                icon={<ArrowLeftOutlined />}
                onClick={() => {
                  onChange(value.subtract(1, "month"));
                }}
              />
              <Button
                size="large"
                type="text"
                icon={<ArrowRightOutlined />}
                onClick={() => {
                  onChange(value.add(1, "month"));
                }}
                disabled={
                  visibleDate.isSame(dayjs().add(1, "year"), "month") &&
                  visibleDate.isSame(dayjs().add(1, "year"), "year")
                }
              />
            </div>
            <div className={`${textBig}`}>
              {value.toDate().toLocaleString("en-US", { month: "long" })}{" "}
              {value.year()}
            </div>
          </div>
        );
      }}
      fullCellRender={(date) => (
        <CalendarGridCell
          minimumPrice={minimumPrice}
          city={city}
          date={date}
          isDateContentVisible={date.month() === visibleDate.month()}
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
      )}
    />
  );
}
