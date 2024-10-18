import { CheckCircleFilled, DollarCircleOutlined } from "@ant-design/icons";
import { PageHeader } from "../../_components/PageHeader";
import { Container } from "../../_components/Container";
import { h1, h3 } from "../../_tailwind-classes/headlines";
import { textBig, textMedium } from "../../_tailwind-classes/texts";
import { PageFooter } from "../../_components/PageFooter";
import { CalendarSearchBar } from "../calendar/client/calendar-search-bar/CalendarSearchBar";
import { HomeTestimonials } from "./HomeTestimonials";
import { HomeFeatures } from "./HomeFeatures";
import { HomeFaqCollapse } from "./HomeFaqCollapse";

export function HomeBerlinPage() {
  return (
    <>
      <PageHeader />
      <main>
        <Container>
          <div className="py-32 pt-28 flex flex-col gap-12 items-center">
            <div className="flex flex-col gap-4 text-center items-center text-balance">
              <h1 className={h1}>
                Location based pricing for your Berlin Airbnb
              </h1>
              <div className={`${textBig} max-w-xl`}>
                PriceBee shows you what to charge for your Airbnb, depending on
                local events and demand in Berlin.
              </div>
            </div>
            <CalendarSearchBar city="berlin" />
            <ul className="flex flex-col gap-2 md:gap-3 items-start">
              <li className={`flex gap-3 justify-center ${textBig}`}>
                <span className="text-green-500 flex items-center">
                  <CheckCircleFilled
                    style={{
                      fontSize: "inherit",
                    }}
                  />
                </span>
                <span>Earn 50% more every year</span>
              </li>
              <li className={`flex gap-3 justify-center ${textBig}`}>
                <span className="text-green-500 flex items-center">
                  <CheckCircleFilled
                    style={{
                      fontSize: "inherit",
                    }}
                  />
                </span>
                <span>Never miss another big event</span>
              </li>
              <li className={`flex gap-3 justify-center ${textBig}`}>
                <span className="text-green-500 flex items-center">
                  <CheckCircleFilled
                    style={{
                      fontSize: "inherit",
                    }}
                  />
                </span>
                <span>Fully tax deductable</span>
              </li>
            </ul>
          </div>
        </Container>
        <HomeTestimonials />
        <Container>
          <div className="py-24 flex flex-col gap-12 items-center">
            <div className="flex flex-col items-center gap-14">
              <div className="flex flex-col gap-4 text-center">
                <h2 className={h1}>How it works</h2>
                <div className={textBig}>
                  PriceBee shows you what to charge for your Berlin Airbnb.
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col items-center text-center flex-grow max-w-[480px]">
                  <div className="h-16 w-16 flex items-center justify-center relative border rounded-md">
                    <span className="text-gray-500">
                      <DollarCircleOutlined
                        style={{
                          fontSize: "40px",
                        }}
                      />
                    </span>
                    <div className="h-5 w-5 rounded-full bg-gray-950 text-white flex items-center justify-center text-sm font-medium absolute -bottom-2 -right-2">
                      1
                    </div>
                  </div>
                  <div className={`mt-4 ${h3}`}>Add minimum price</div>
                  <div className={`mt-2 ${textMedium}`}>
                    On days with low demand. What should be the minimum price
                    per night?
                  </div>
                </div>
              </div>
              <CalendarSearchBar city="berlin" />
            </div>
          </div>
        </Container>
        <HomeFeatures />
        <Container>
          <div className="py-24 flex flex-col gap-8 items-center">
            <h2 className={`text-center ${h1}`}>Frequently Asked Questions</h2>
            <div className="max-w-[864px] w-full">
              <HomeFaqCollapse />
            </div>
            <p className={`${textMedium} max-w-[460px] text-center`}>
              Ready to start? Enter a minimum price to see daily pricing
              suggestions for your Berlin Airbnb.
            </p>
            <CalendarSearchBar city="berlin" />
          </div>
        </Container>
      </main>
      <PageFooter />
    </>
  );
}
