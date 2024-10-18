import { Dayjs } from "dayjs";
import { Badge, Button, Empty, Modal } from "antd";
import { useCalendarDateInformationQuery } from "./hooks/useCalendarDateInformationQuery";
import { getPriceSuggestionForDate } from "./utils/getPriceSuggestionForDate";
import { CaretUpOutlined } from "@ant-design/icons";
import { ReactNode } from "react";
import { CalendarUpsaleInlay } from "./CalendarUpsaleInlay";
import { CalendarDateInformationType } from "../types/calendarDateInformation";

export type CalendarDateModalProps = {
  isOpen: boolean;
  onClose: () => void;
  city: string;
  date: Dayjs;
  minimumPrice: number | null;
};

export function CalendarDateModal({
  isOpen,
  onClose,
  city,
  date,
  minimumPrice,
}: CalendarDateModalProps) {
  const { data: calendarDateInformation, isLoading } =
    useCalendarDateInformationQuery({
      city,
      date,
    });
  return (
    <Modal
      title={`${date.toDate().toLocaleString("en-US", {
        weekday: "long",
      })}, ${date.date()}. ${date
        .toDate()
        .toLocaleString("en-US", { month: "long" })} ${date.year()}`}
      footer={<Button onClick={onClose}>Close</Button>}
      loading={isLoading}
      open={isOpen}
      onCancel={onClose}
    >
      {calendarDateInformation ? (
        <CalendarDateModalBody
          calendarDateInformation={calendarDateInformation}
          minimumPrice={minimumPrice}
        />
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </Modal>
  );
}

function CalendarDateModalBody({
  minimumPrice,
  calendarDateInformation,
}: {
  minimumPrice: number | null;
  calendarDateInformation: CalendarDateInformationType;
}) {
  function Container(children: ReactNode) {
    return (
      <div>
        <CalendarDateModalBodyPrice
          minimumPrice={minimumPrice}
          calendarDateInformation={calendarDateInformation}
        />
        {children}
      </div>
    );
  }

  if (calendarDateInformation.isHidden)
    return Container(
      <div className="py-6">
        <CalendarUpsaleInlay kind="day" minimumPrice={minimumPrice} />
      </div>
    );

  return Container(
    <ul>
      <li className="px-6 py-3 flex justify-between border-b">
        <div className="flex gap-2">
          <Badge color="gray" />
          <span className="truncate">Minimum Price</span>
        </div>
        <div>{minimumPrice} €</div>
      </li>
      {calendarDateInformation.timingFactors.map((factor, index) => (
        <li className="px-6 py-3 flex justify-between border-b" key={index}>
          <div className="flex gap-2">
            <Badge color="blue" />
            <span className="truncate">Timing: {factor.name}</span>
          </div>
          <div>x{factor.multiplier}</div>
        </li>
      ))}
      {calendarDateInformation.events.map((event, index) => (
        <li className="px-6 py-3 flex justify-between border-b" key={index}>
          <div className="flex gap-2">
            <Badge color="green" />
            <span className="truncate">Event: {event.name}</span>
          </div>
          <div>x{event.multiplier}</div>
        </li>
      ))}
      <li className="px-6 py-3 flex justify-end">
        <span className="font-bold">
          {minimumPrice
            ? getPriceSuggestionForDate({
                minimumPrice,
                timingFactors: calendarDateInformation.timingFactors,
                events: calendarDateInformation.events,
              })
            : "?"}
          €
        </span>
      </li>
    </ul>
  );
}

function CalendarDateModalBodyPrice({
  minimumPrice,
  calendarDateInformation,
}: {
  minimumPrice: number | null;
  calendarDateInformation: CalendarDateInformationType;
}) {
  function Container(children: ReactNode) {
    return (
      <div
        className={`py-6 flex gap-4 items-center ${
          calendarDateInformation.isHidden ? "blur-md" : ""
        }`}
      >
        {children}
      </div>
    );
  }

  if (!minimumPrice)
    return Container(
      <>
        <span className="text-5xl font-medium">? €</span>
        <div className="flex flex-col text-sm">
          <span className="text-green-500">
            <CaretUpOutlined /> ? %
          </span>
          <span>? € higher earnings</span>
        </div>
      </>
    );

  const priceSuggestion = getPriceSuggestionForDate({
    minimumPrice,
    timingFactors: calendarDateInformation.timingFactors,
    events: calendarDateInformation.events,
  });

  return Container(
    <>
      <span className="text-5xl font-medium">{priceSuggestion} €</span>
      {priceSuggestion > minimumPrice && (
        <div className="flex flex-col text-sm">
          <span className="text-green-500">
            <CaretUpOutlined />{" "}
            {Math.floor(
              ((priceSuggestion - minimumPrice) / minimumPrice) * 100
            )}
            %
          </span>
          <span>{priceSuggestion - minimumPrice} € higher earnings</span>
        </div>
      )}
    </>
  );
}
