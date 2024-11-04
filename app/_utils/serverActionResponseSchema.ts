import { z } from "zod";

export type ServerActionResponseType = {
  key: string;
  code: number;
  message: string | { [key: string]: string[] };
};

export const serverActionResponseSchema = z.object({
  key: z.string(),
  code: z.number(),
  message: z.union([z.string(), z.record(z.string(), z.array(z.string()))]),
});
