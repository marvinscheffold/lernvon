import { z } from "zod";

export const MAX_MAX_PRICE = 120;
export const MIN_MIN_PRICE = 15;
export const searchParamMinPriceSchema = z.coerce
  .number({ invalid_type_error: "min_price must be a number" })
  .min(MIN_MIN_PRICE, "min_price must be geater than 15")
  .max(MAX_MAX_PRICE, "min_price must be smaller than 120")
  .optional();
export const searchParamMaxPriceSchema = z.coerce
  .number({ invalid_type_error: "max_price must be a number" })
  .min(MIN_MIN_PRICE, "max_price must be greater than 15")
  .max(MAX_MAX_PRICE, "max_price must be smaller than 120")
  .optional();
export const searchParamPoolIdsSchema = z
  .string()
  .min(0)
  .refine((value) => {
    const pool_ids = value.split(",");
    return !pool_ids.some((poolId) => isNaN(parseInt(poolId)));
  })
  .transform((value) => value.split(",").map((n) => parseInt(n)))
  .optional();
export const searchParamPageSchema = z.coerce
  .number({
    invalid_type_error: "page must be a number",
  })
  .min(1)
  .optional();
