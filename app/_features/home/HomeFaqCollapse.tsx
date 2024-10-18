import { Collapse } from "antd";
import { textBig, textMedium } from "app/_tailwind-classes/texts";
import Link from "next/link";

export function HomeFaqCollapse() {
  return (
    <Collapse
      size="large"
      items={[
        {
          key: "1",
          label: (
            <div className={textBig}>How should I set the minimum price?</div>
          ),
          children: (
            <p className={textMedium}>
              To set the minimum price for your Airbnb, research similar
              listings in your area to understand the market rates and seasonal
              trends. All in all you should set this price pretty low. It should
              be just enough to be booked out on a day with very little demand.
            </p>
          ),
        },
        {
          key: "2",
          label: <div className={textBig}>What city should I use?</div>,
          children: (
            <p className={textMedium}>
              If you can use the city your Airbnb is in. If your Airbnb is not
              located in an available city, choose a city that is close and
              might affect local demand for your listing.
            </p>
          ),
        },
        {
          key: "3",
          label: <div className={textBig}>How much does PriceBee cost?</div>,
          children: (
            <p className={textMedium}>
              PriceBee costs 19,90€ per year. Find out more{" "}
              <Link href={"/pricing"}>here</Link>
            </p>
          ),
        },
        {
          key: "4",
          label: (
            <div className={textBig}>How can I cancel my subscription?</div>
          ),
          children: (
            <p className={textMedium}>
              To cancel your subscription just write us an email at{" "}
              <Link href={"mailto:info@phelb.com"}>info@phelb.com</Link>
            </p>
          ),
        },
        {
          key: "5",
          label: <div className={textBig}>What is PriceBee?</div>,
          children: (
            <p className={textMedium}>
              PriceBee provides location-based pricing for your Airbnb,
              adjusting rates based on local events and demand. By using
              PriceBee, hosts can potentially earn 50% more annually, avoid
              missing major events, and benefit from tax deductions.
            </p>
          ),
        },
      ]}
      defaultActiveKey={["1"]}
    />
  );
}
