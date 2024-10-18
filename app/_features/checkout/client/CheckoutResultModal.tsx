"use client";
import { Button, Modal, Result } from "antd";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function CheckoutResultModal() {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const isCheckoutSuccess = searchParams.get("checkout-success") === "true";
  const isCheckoutCanceled = searchParams.get("checkout-canceled") === "true";

  useEffect(() => {
    if (isCheckoutSuccess || isCheckoutCanceled) setIsOpen(true);
  }, [isCheckoutSuccess, isCheckoutCanceled]);

  return (
    <Modal
      title={isCheckoutSuccess ? "Checkout successfull" : "Checkout cancelled"}
      footer={null}
      open={isOpen}
      onCancel={() => setIsOpen(false)}
    >
      {isCheckoutSuccess && (
        <Result
          status="success"
          title="Checkout was succesfull"
          subTitle="Congrats! You can now see all available dates and events."
          extra={
            <Button
              size="large"
              onClick={() => setIsOpen(false)}
              type="primary"
            >
              Close
            </Button>
          }
        />
      )}
      {isCheckoutCanceled && (
        <Result
          status="info"
          title="Checkout was canceled"
          subTitle="You cancelled the checkout or something else happened. If you have any questions please write us an email."
          extra={[
            <Link href={"mailto:info@phelb.com"} key={"email"}>
              <Button size="large" type="primary">
                Write us an Email
              </Button>
            </Link>,
            <Button
              size="large"
              key={"close"}
              onClick={() => setIsOpen(false)}
              type="default"
            >
              Close
            </Button>,
          ]}
        />
      )}
    </Modal>
  );
}
