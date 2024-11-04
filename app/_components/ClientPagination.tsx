"use client";

import { Pagination } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type ClientPaginationProps = {
  count: number;
  page: number;
};

export function ClientPagination({ count, page }: ClientPaginationProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const createSearchParamsString = useCallback(
    (
      newSearchParams: {
        name: string;
        value: string | number;
      }[]
    ) => {
      const searchParamsParsed = new URLSearchParams(searchParams.toString());
      newSearchParams.forEach(({ name, value }) => {
        if (value.toString().length === 0)
          return searchParamsParsed.delete(name);
        searchParamsParsed.set(name, value.toString());
      });
      return searchParamsParsed.toString();
    },
    [searchParams]
  );

  if (count <= 1) return null;

  return (
    <Pagination
      count={count}
      page={page}
      onChange={(_event, page) => {
        router.push(
          pathname +
            "?" +
            createSearchParamsString([{ name: "page", value: page }])
        );
      }}
    />
  );
}
