import { CheckCircleFilled } from "@ant-design/icons";
import { CheckoutButton } from "app/_features/checkout/client/CheckoutButton";

type CalendarUpsaleInlayProps = {
  kind: "day" | "month";
  minimumPrice?: number | null;
};

export function CalendarUpsaleInlay({
  kind,
  minimumPrice,
}: CalendarUpsaleInlayProps) {
  const isHigherEarningsVisible = Boolean(minimumPrice);
  const higherEarnings =
    isHigherEarningsVisible && minimumPrice
      ? Math.floor(minimumPrice * 365 * 0.5 * 0.5)
      : 0;

  return (
    <div className="@container">
      <div className="flex flex-col @lg:flex-row gap-6 @lg:items-center">
        <div className="flex flex-col gap-4 @md:flex-grow">
          <div className="text-4xl font-medium">
            {kind === "day" ? "Unlock this day" : "Unlock the next 365 days"}
          </div>
          <div className="text-xl">
            {kind === "day"
              ? `And the next 365 days to earn ${
                  isHigherEarningsVisible ? `${higherEarnings} €` : ""
                } more with your Airbnb.`
              : `And earn ${
                  isHigherEarningsVisible ? `${higherEarnings} €` : ""
                } more with your Airbnb.`}
          </div>
          <div className="flex gap-4 items-center">
            <CheckoutButton size="large" type="primary" />
            <span className="text-lg">
              <span className="text-red-500 line-through">54,90 €</span> 19,90
              €/year
            </span>
          </div>
        </div>
        <ul className="flex flex-col gap-2 md:gap-3 items-start @md:flex-grow">
          <li className={`flex gap-3 justify-center text-xl`}>
            <span className="text-green-500 flex items-center">
              <CheckCircleFilled
                style={{
                  fontSize: "24px",
                }}
              />
            </span>
            <span>Cancel any time</span>
          </li>
          <li className={`flex gap-3 justify-center  text-xl`}>
            <span className="text-green-500 flex items-center">
              <CheckCircleFilled
                style={{
                  fontSize: "24px",
                }}
              />
            </span>
            <span>Never miss another big event</span>
          </li>
          <li className={`flex gap-3 justify-center  text-xl`}>
            <span className="text-green-500 flex items-center">
              <CheckCircleFilled
                style={{
                  fontSize: "24px",
                }}
              />
            </span>
            <span>Fully tax deductable</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
