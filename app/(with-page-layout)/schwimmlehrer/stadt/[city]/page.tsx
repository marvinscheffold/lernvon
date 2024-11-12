import { TeacherResultPage } from "@/app/_features/teacher/teacher-result-page/TeacherResultPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Schwimmlehrer & Schwimmtrainer - Finde den perfekten Schwimmlehrer in Berlin | lernvon",
  description:
    "Entdecke die besten Schwimmlehrer und Schwimmtrainer in Berlin. Lerne sicher schwimmen oder verbessere deine Technik mit qualifizierten Experten. Finde jetzt den perfekten Schwimmlehrer!",
};

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
