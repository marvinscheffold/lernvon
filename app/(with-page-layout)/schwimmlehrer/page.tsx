import { Container } from "@/app/_components/Container";
import { TeacherResultPageFilters } from "@/app/_features/teacher/teacher-result-page/TeacherResultPageFilters";
import { TeacherResultPagePreviewItem } from "@/app/_features/teacher/teacher-result-page/TeacherResultPagePreviewItem";
import { TEACHERS_ROUTE } from "@/app/_utils/constants/routes";
import { createSupabaseServiceRoleClient } from "@/app/_utils/supabase/createSupabaseServiceRoleClient";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { z } from "zod";

const searchParamsSchema = z.object({
  min_price: z.coerce
    .number({ invalid_type_error: "min_price must be a number" })
    .min(0, "min_price must be positive")
    .optional(),
  max_price: z.coerce
    .number({ invalid_type_error: "max_price must be a number" })
    .min(0, "max_price must be positive")
    .optional(),
  pools: z.coerce
    .number({ invalid_type_error: "pools must be a number or number array" })
    .min(0)
    .or(
      z.array(
        z
          .number({
            invalid_type_error: "pools must be a number or number array",
          })
          .min(0)
      )
    )
    .optional(),
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { data: searchParamsVerified } = searchParamsSchema.safeParse(
    await searchParams
  );

  let query = createSupabaseServiceRoleClient()
    .from("teacher")
    .select("*, pools:pool!inner(*)")
    .eq("isVisible", true);

  if (searchParamsVerified) {
    if (searchParamsVerified.min_price) {
      query = query.gt("pricePerHour", searchParamsVerified.min_price);
    }
    if (searchParamsVerified.max_price) {
      query = query.lt("pricePerHour", searchParamsVerified.max_price);
    }
    if (searchParamsVerified.pools) {
      query = query.in(
        "pools.id",
        Array.isArray(searchParamsVerified.pools)
          ? searchParamsVerified.pools
          : [searchParamsVerified.pools]
      );
    }
  }

  const { data: teachers } = await query;

  return (
    <>
      <Container>
        <div className="pt-8 pb-2">
          <Typography variant="h5">
            {teachers ? teachers.length : 0} Schwimmlehrer in Berlin gefunden
          </Typography>
        </div>
      </Container>
      <Container hasPadding={false}>
        <div className="flex-col md:flex-row flex gap-0 md:gap-10 p-0 md:px-6">
          <div className="flex-shrink-0 relative md:sticky z-20 self-start h-auto top-0 bg-white w-full md:w-72 border-b border-gray-200 md:border-none py-6 px-6 md:px-0">
            <TeacherResultPageFilters />
          </div>
          {teachers && teachers.length > 0 ? (
            <ul className="flex-grow">
              {teachers?.map((teacher) => (
                <li
                  key={teacher.id}
                  className="py-6 px-6 md:px-0 border-b border-gray-200"
                >
                  <TeacherResultPagePreviewItem {...teacher} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex-grow h-80 p-6 flex justify-center items-center flex-col gap-1">
              <Typography variant="h6">Keine Schwimmlehrer gefunden</Typography>
              <Typography
                className="text-center"
                variant="body2"
                color="textSecondary"
              >
                Mit den aktuellen Filtern konnten wir keine Lehrer finden.
              </Typography>
              <Link href={TEACHERS_ROUTE} className="mt-3">
                <Button variant="contained">Filter zurücksetzen</Button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </>
  );
}
