import { PageHeader } from "./../../_components/PageHeader";
import { Container } from "./../../_components/Container";
import { PageFooter } from "./../../_components/PageFooter";
import { CheckoutButton } from "../checkout/client/CheckoutButton";
import { h1 } from "app/_tailwind-classes/headlines";
import { CheckCircleFilled } from "@ant-design/icons";
import { LoginLogoutButton } from "../auth/LoginLogoutButton";
import { textBig } from "app/_tailwind-classes/texts";

export function PricingPage() {
  return (
    <>
      <PageHeader />
      <main>
        <Container>
          <div className="w-full flex flex-col gap-12 items-center py-12">
            <h1 className={h1}>Pricing</h1>
            <div className="w-full max-w-xl relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3"></th>
                    <th scope="col" className="px-6 py-3">
                      Starter
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Premium
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Price
                    </th>
                    <td className="px-6 py-4">Free</td>
                    <td className="px-6 py-4">19,90 €/year + VAT</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Price Breakdowns
                    </th>
                    <td className="px-6 py-4">Limited</td>
                    <td className="px-6 py-4 text-green-500">
                      <CheckCircleFilled
                        style={{
                          fontSize: "24px",
                        }}
                      />
                    </td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      Visible Days
                    </th>
                    <td className="px-6 py-4">45</td>
                    <td className="px-6 py-4">365</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      Blurred out days
                    </th>
                    <td className="px-6 py-4">Random</td>
                    <td className="px-6 py-4">None</td>
                  </tr>
                  <tr className="bg-white ">
                    <th scope="row"></th>
                    <td className="px-6 py-4">
                      <LoginLogoutButton />
                    </td>
                    <td className="px-6 py-4">
                      <CheckoutButton type="primary" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
        <div className="bg-gray-50">
          <Container>
            <div className="pb-24 pt-16 flex flex-col gap-12 items-center">
              <h2 className={h1}>Benefits of Premium</h2>
              <ul className="flex flex-col gap-2 md:gap-3 items-start">
                <li className={`flex gap-3 justify-center ${textBig}`}>
                  <span className="text-green-500 flex items-center">
                    <CheckCircleFilled
                      style={{
                        fontSize: "inherit",
                      }}
                    />
                  </span>
                  <span>Cancel any time</span>
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
                <li className={`flex gap-3 justify-center ${textBig}`}>
                  <span className="text-green-500 flex items-center">
                    <CheckCircleFilled
                      style={{
                        fontSize: "inherit",
                      }}
                    />
                  </span>
                  <span>Earn up to 50% more every year</span>
                </li>
              </ul>
            </div>
          </Container>
        </div>
      </main>
      <PageFooter />
    </>
  );
}
