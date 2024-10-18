import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { MouseEvent } from "react";

type CalendarSearchBarSmallProps = {
  city: string;
  minimumPrice: string | number | null;
  onClick: (event: MouseEvent) => void;
};

export function CalendarSearchBarSmall({
  city,
  minimumPrice,
  onClick,
}: CalendarSearchBarSmallProps) {
  return (
    <div
      onClick={onClick}
      className="h-12 w-auto border rounded-full shadow-md flex gap-4 items-center p-2 pl-5 cursor-pointer"
    >
      <div className="text-base font-medium min-w-16">{city}</div>
      <div className="w-[1px] h-full bg-gray-200"></div>
      <div className="text-base font-medium min-w-12">
        {minimumPrice || "?"} €
      </div>
      <Button icon={<SearchOutlined />} shape="circle" type="primary" />
    </div>
  );
}
