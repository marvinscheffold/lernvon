"use client";

import { PoolChip } from "@/app/_features/pool/PoolChip";
import { PoolSearchInputAndSelectDropdown } from "@/app/_features/pool/PoolSearchInputAndSelectDropdown";
import {
  MAX_MAX_PRICE,
  searchParamMaxPriceSchema,
  searchParamMinPriceSchema,
  searchParamPoolIdsSchema,
} from "@/app/_features/teacher/teacher-result-page/teacherResultPageUtils";
import { useStateEffect } from "@/app/_utils/hooks/useStateEffect";
import { Chip, Slider, Typography } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function TeacherResultPageFilters() {
  const router = useRouter();
  const pathname = usePathname();
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

  const [minPrice, setMinPrice] = useStateEffect(
    searchParamMinPriceSchema.safeParse(searchParams.get("min_price")).data ??
      0,
    [searchParams]
  );
  const [maxPrice, setMaxPrice] = useStateEffect(
    searchParamMaxPriceSchema.safeParse(searchParams.get("max_price")).data ??
      MAX_MAX_PRICE,
    [searchParams]
  );
  const xpoolIds = searchParamPoolIdsSchema.safeParse(
    searchParams.get("pool_ids")
  ).data;
  console.log({ xpoolIds });
  const [poolIds, setPoolIds] = useStateEffect(
    searchParamPoolIdsSchema.safeParse(searchParams.get("pool_ids")).data ?? [],
    [searchParams]
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <Typography variant="subtitle1">Preis</Typography>
        <Typography variant="h6" className="!font-normal">
          {minPrice} € – {maxPrice} €{" "}
          {maxPrice === MAX_MAX_PRICE ? "& mehr" : ""}
        </Typography>
        <div className="flex flex-col gap-0">
          <Slider
            value={[minPrice, maxPrice]}
            onChange={(_event, value) => {
              if (!Array.isArray(value)) return;
              setMinPrice(value[0]);
              setMaxPrice(value[1]);
            }}
            onChangeCommitted={(_event, value) => {
              if (!Array.isArray(value)) return;
              router.push(
                pathname +
                  "?" +
                  createSearchParamsString([
                    { name: "min_price", value: value[0] },
                    { name: "max_price", value: value[1] },
                    { name: "page", value: "" },
                  ])
              );
            }}
            disableSwap
            min={0}
            max={MAX_MAX_PRICE}
            color="primary"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Typography variant="subtitle1">Schwimmbäder</Typography>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 items-start">
            {poolIds.length === 0 && (
              <Chip label="Alle Schwimmbäder" variant="outlined" />
            )}
            {poolIds.map((poolId) => (
              <PoolChip
                key={poolId}
                poolId={poolId}
                variant="outlined"
                onDelete={() => {
                  setPoolIds((poolIds) => {
                    const newPoolIds = poolIds.filter((p) => p !== poolId);

                    router.push(
                      pathname +
                        "?" +
                        createSearchParamsString([
                          { name: "pool_ids", value: newPoolIds.join(",") },
                          { name: "page", value: "" },
                        ])
                    );

                    return newPoolIds;
                  });
                }}
              />
            ))}
          </div>
          <PoolSearchInputAndSelectDropdown
            onSelect={(pool) => {
              setPoolIds((poolIds) => {
                const newPoolIds = [...poolIds, pool.id];

                router.push(
                  pathname +
                    "?" +
                    createSearchParamsString([
                      { name: "pool_ids", value: newPoolIds.join(",") },
                      { name: "page", value: "" },
                    ])
                );

                return newPoolIds;
              });
            }}
            disabledOptionValues={poolIds}
            variant="filled"
          />
        </div>
      </div>
    </div>
  );
}
