import { TeacherResultPage } from "@/app/_features/teacher/teacher-result-page/TeacherResultPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Schwimmlehrer in Deutschland - Privater Schwimmunterricht ab 15€ pro Stunde | lernvon",
  description:
    "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in Deutschland. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
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
        template: "x Schwimmlehrer gefunden",
        replaceWithNumberOfResults: "x",
      }}
    />
  );
}
