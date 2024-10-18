import { queryOptions } from "@tanstack/react-query";
import { readCheckoutSubscription } from "./checkoutApiClient";

export const checkoutQueryKeyBase = "checkout";

export const checkoutQueries = {
  all: () => [checkoutQueryKeyBase] as const,
  subscription: () =>
    queryOptions({
      queryKey: [...checkoutQueries.all(), "subscription"],
      queryFn: () => readCheckoutSubscription(),
    }),
};
