"use client";
import "./calendarSearchBar.css";
import { useRouter } from "next/navigation";
import { Button, InputNumber, Select, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { FormEvent, useState } from "react";
import { textMedium } from "../../../../_tailwind-classes/texts";

type CalendarSearchBarProps = {
  city?: "berlin";
};

export function CalendarSearchBar({ city: cityProp }: CalendarSearchBarProps) {
  const router = useRouter();
  const [city, setCity] = useState<null | string>(cityProp || null);
  const [minimumPrice, setMinimumPrice] = useState<null | string>(null);
  const [wasFormSubmitted, setWasFormSubmitted] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setWasFormSubmitted(true);
    if (!city || !minimumPrice) return;
    router.push(`/calendar/${city}/?p=${minimumPrice}`);
  }

  return (
    <div className="w-full md:w-auto">
      <form
        className="w-full md:w-auto flex items-center flex-col md:flex-row h-auto md:h-20 rounded-2xl md:rounded-full p-4 md:p-3 md:pl-8 gap-3 border shadow-lg"
        onSubmit={handleSubmit}
      >
        {!cityProp && (
          <>
            <div
              className={`flex items-center w-full md:w-[248px] h-auto md:h-full rounded-md ${
                wasFormSubmitted && !city && "outline outline-red-500"
              }`}
            >
              <Select
                value={city}
                onChange={setCity}
                className="search-bar-select"
                variant="borderless"
                showSearch
                size="large"
                placeholder="Where is your Airbnb?"
                optionFilterProp="label"
                style={{
                  width: "100%",
                }}
                options={[
                  {
                    value: "berlin",
                    label: "Berlin",
                  },
                ]}
              />
            </div>
            <div className="w-full md:w-[1px] h-[1px] md:h-full bg-gray-200"></div>
          </>
        )}

        <Tooltip title="On days with low demand, what should be the minimum price per night in €?">
          <div
            className={`flex items-center w-full md:w-[248px] h-auto md:h-full rounded-md ${
              wasFormSubmitted && !minimumPrice && "outline outline-red-500"
            }`}
          >
            <InputNumber
              value={minimumPrice}
              onChange={(value) => setMinimumPrice(value)}
              status={wasFormSubmitted && !minimumPrice ? "error" : undefined}
              className="search-bar-input-number"
              size="large"
              variant="borderless"
              placeholder="Minimum price/night"
              style={{
                width: "100%",
              }}
              suffix="€"
            />
          </div>
        </Tooltip>
        <div className="hidden md:block">
          <Button
            icon={<SearchOutlined style={{ fontSize: "28px" }} />}
            shape="circle"
            type="primary"
            style={{
              height: "56px",
              width: "56px",
            }}
            htmlType="submit"
          ></Button>
        </div>
        <div className="block md:hidden w-full mt-[2px]">
          <Button
            icon={<SearchOutlined style={{ fontSize: "22px" }} />}
            type="primary"
            style={{
              height: "48px",
              width: "100%",
              fontSize: "22px",
            }}
            htmlType="submit"
          >
            Search
          </Button>
        </div>
      </form>
      {wasFormSubmitted && (!city || !minimumPrice) && (
        <div className={`${textMedium} text-red-500 mt-4 text-center`}>
          {wasFormSubmitted && !city && minimumPrice && (
            <span>Please add a city</span>
          )}
          {wasFormSubmitted && !minimumPrice && city && (
            <span>Please add a minimum price</span>
          )}
          {wasFormSubmitted && !city && !minimumPrice && (
            <span>Please add a city and a minimum price</span>
          )}
        </div>
      )}
    </div>
  );
}
