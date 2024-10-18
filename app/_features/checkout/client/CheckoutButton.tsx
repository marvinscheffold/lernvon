"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, ButtonProps } from "antd";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import { authQueries } from "app/_features/auth/authQueries";
import { createCheckoutSession } from "app/_features/checkout/client/checkoutApiClient";

type CheckoutButtonProps = ButtonProps;

export function CheckoutButton(props: CheckoutButtonProps) {
  const { data: session } = useQuery(authQueries.session());
  const createCheckoutSessionMutation = useMutation({
    mutationFn: createCheckoutSession,
  });

  async function handleSubscribe() {
    if (!session) return;
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
    );

    if (!stripe) return;

    createCheckoutSessionMutation.mutate(session.access_token, {
      onSuccess: (checkoutSession) => {
        console.log(checkoutSession);
        stripe.redirectToCheckout({
          sessionId: checkoutSession.id,
        });
      },
      onError: (error) => {
        console.log(error);
      },
    });
  }

  if (session)
    return (
      <Button
        {...props}
        onClick={() => handleSubscribe()}
        loading={createCheckoutSessionMutation.isPending}
      >
        Subscribe
      </Button>
    );

  if (session === null)
    return (
      <Link href={"/login"}>
        <Button {...props}>Subscribe</Button>
      </Link>
    );

  return (
    <Button {...props} disabled>
      Subscribe
    </Button>
  );
}
