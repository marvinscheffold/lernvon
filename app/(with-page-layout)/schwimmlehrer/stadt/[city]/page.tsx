import { TeacherResultPage } from "@/app/_features/teacher/teacher-result-page/TeacherResultPage";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <TeacherResultPage
      searchParams={searchParams}
      headline={{
        template: "x Schwimmlehrer in Berlin gefunden",
        replaceWithNumberOfResults: "x",
      }}
    />
  );
}
