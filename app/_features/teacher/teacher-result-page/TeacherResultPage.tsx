import { ClientPagination } from "@/app/_components/ClientPagination";
import { Container } from "@/app/_components/Container";
import { TeacherResultPageFilters } from "@/app/_features/teacher/teacher-result-page/TeacherResultPageFilters";
import { TeacherResultPagePreviewItem } from "@/app/_features/teacher/teacher-result-page/TeacherResultPagePreviewItem";
import {
  searchParamMaxPriceSchema,
  searchParamMinPriceSchema,
  searchParamPageSchema,
  searchParamPoolIdsSchema,
} from "@/app/_features/teacher/teacher-result-page/teacherResultPageUtils";
import { SWIMMING_TEACHERS_ROUTE } from "@/app/_utils/constants/routes";
import { createSupabaseAdminClient } from "@/app/_utils/supabase/createSupabaseAdminClient";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

type TeacherResultPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  headline: {
    template: string;
    replaceWithNumberOfResults: string;
  };
};

const PAGINATION_PAGE_SIZE = 15;

export async function TeacherResultPage({
  searchParams,
  headline,
}: TeacherResultPageProps) {
  const searchParamsAwaited = await searchParams;
  const { data: poolIdsVerified } = searchParamPoolIdsSchema.safeParse(
    searchParamsAwaited.pool_ids
  );

  let query;
  if (poolIdsVerified) {
    query = createSupabaseAdminClient()
      .from("teacher")
      .select(`*, pools:pool!inner(*)`, { count: "exact" })
      .in("pools.id", poolIdsVerified);
  } else {
    query = createSupabaseAdminClient()
      .from("teacher")
      .select(`*, pools:pool(*)`, { count: "exact" });
  }

  const { data: minPriceVerified } = searchParamMinPriceSchema.safeParse(
    searchParamsAwaited.min_price
  );
  if (minPriceVerified) {
    query = query.gt("pricePerHour", minPriceVerified);
  }

  const { data: maxPriceVerified } = searchParamMaxPriceSchema.safeParse(
    searchParamsAwaited.max_price
  );
  if (maxPriceVerified && maxPriceVerified < 120) {
    query = query.lt("pricePerHour", maxPriceVerified);
  }

  query = query.eq("isVisible", true).order("id", { ascending: false });

  const { data: pageVerified } = searchParamPageSchema.safeParse(
    searchParamsAwaited.page
  );
  const page = pageVerified ?? 1;
  query = query.range(
    (page - 1) * PAGINATION_PAGE_SIZE,
    page * PAGINATION_PAGE_SIZE - 1
  );

  const { data: teachers, count } = await query;

  return (
    <>
      <Container>
        <div className="pt-8 pb-2">
          <Typography variant="h5">
            {headline.template.replace(
              headline.replaceWithNumberOfResults,
              teachers ? `${teachers.length}` : `${0}`
            )}
          </Typography>
        </div>
      </Container>
      <Container hasPadding={false}>
        <div className="flex-col md:flex-row flex gap-0 md:gap-10 p-0 md:px-6">
          <div className="flex-shrink-0 relative md:sticky z-20 self-start h-auto top-0 bg-white w-full md:w-72 border-b border-neutral-100 md:border-none py-6 px-6 md:px-0">
            <TeacherResultPageFilters />
          </div>
          {teachers && teachers.length > 0 && count ? (
            <div className="flex-grow">
              <ul>
                {teachers?.map((teacher) => (
                  <li
                    key={teacher.id}
                    className="py-6 px-6 md:px-0 border-b border-neutral-100 last:border-0"
                  >
                    <TeacherResultPagePreviewItem {...teacher} />
                  </li>
                ))}
              </ul>
              <div className="flex justify-center p-6">
                <ClientPagination
                  count={count / PAGINATION_PAGE_SIZE}
                  page={pageVerified || 1}
                />
              </div>
            </div>
          ) : (
            <div className="flex-grow h-80 p-6 flex justify-center items-center flex-col">
              <Typography className="!mb-2 !font-normal" variant="h6">
                Keine Schwimmlehrer gefunden
              </Typography>
              <Typography
                className="!mb-4 text-center"
                variant="body2"
                color="textSecondary"
              >
                Mit den aktuellen Filtern konnten wir keine Lehrer finden.
              </Typography>
              <Link href={SWIMMING_TEACHERS_ROUTE}>
                <Button variant="contained">Filter zurücksetzen</Button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </>
  );
}
