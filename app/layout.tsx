import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import dayjs from "dayjs";
import { ConfigProvider } from "antd";
import { ReactQueryClientProvider } from "./_components/ReactQueryClientProvider";
import { CheckoutResultModal } from "./_features/checkout/client/CheckoutResultModal";
import { Suspense } from "react";
dayjs.locale("en-US");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <AntdRegistry>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#3b82f6",
              colorInfo: "#3b82f6",
              colorTextBase: "#030712",
              colorBgBase: "#fff",
            },
          }}
        >
          <html lang="en">
            <body>{children}</body>
          </html>
          <Suspense>
            <CheckoutResultModal />
          </Suspense>
        </ConfigProvider>
      </AntdRegistry>
    </ReactQueryClientProvider>
  );
}
