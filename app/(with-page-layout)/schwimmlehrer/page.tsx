import { TeacherResultPage } from "@/app/_features/teacher/teacher-result-page/TeacherResultPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Schwimmlehrer & Schwimmtrainer - Finde den perfekten Schwimmlehrer in ganz Deutschland | lernvon",
  description:
    "Finde professionelle Schwimmlehrer und Schwimmtrainer in ganz Deutschland. Lerne schwimmen oder optimiere deine Technik mit erfahrenen Experten. Entdecke deinen perfekten Schwimmlehrer bei lernvon!",
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
