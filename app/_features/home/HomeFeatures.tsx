import { Container } from "app/_components/Container";
import { h1 } from "app/_tailwind-classes/headlines";
import { textBig } from "app/_tailwind-classes/texts";
import Image from "next/image";

export function HomeFeatures() {
  return (
    <div className="bg-gray-50">
      <Container>
        <div className="py-24 flex flex-col gap-24 items-center">
          <div className="grid gap-8 lg:gap-16 grid-cols-1 lg:grid-cols-2 items-center">
            <div className="flex flex-col gap-4 flex-grow">
              <h3 className={h1}>Calendar Overview</h3>
              <p className={textBig}>
                In the calendar overview you can see all dates at a glance.
                Green dots highlight events and blue dots highlight other
                pricing factors on that date
              </p>
            </div>
            <div className="flex-grow aspect-video relative">
              <Image
                className="rounded-3xl"
                src="/images/feature-calendar.jpg"
                alt="Picture of the author"
                fill={true}
              />
            </div>
          </div>
          <div className="grid gap-8 lg:gap-16 grid-cols-1 lg:grid-cols-2 items-center">
            <div className="flex-grow aspect-video relative order-2 lg:order-1">
              <Image
                className="rounded-3xl"
                src="/images/feature-breakdown.jpg"
                alt="Picture of the author"
                fill={true}
              />
            </div>
            <div className="flex flex-col gap-4 flex-grow order-1 lg:order-2">
              <h3 className={h1}>Price Breakdown</h3>
              <p className={textBig}>
                Open the price breakdown to find out how PriceBee calculates the
                suggested price for a particular date.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
