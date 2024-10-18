import { queryOptions } from "@tanstack/react-query";
import { readAuthUser, readSession } from "./authApiClient";

export const authQueryKeyBase = "auth";

export const authQueries = {
  all: () => [authQueryKeyBase] as const,
  user: () =>
    queryOptions({
      queryKey: [...authQueries.all(), "user"],
      queryFn: () => readAuthUser(),
    }),
  session: () =>
    queryOptions({
      queryKey: [...authQueries.all(), "session"],
      queryFn: () => readSession(),
    }),
};
