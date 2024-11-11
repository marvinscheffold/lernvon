import { TeacherResultPage } from "@/app/_features/teacher/teacher-result-page/TeacherResultPage";

export default async function Page({
  searchParams,
  params,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  params: { district: string };
}) {
  let template = "x Schwimmlehrer in Berlin gefunden";
  if (params.district.indexOf("lichtenberg") >= 0)
    template = "x Schwimmlehrer in Berlin Lichtenberg gefunden";
  if (params.district.indexOf("friedrichshain-kreuzberg") >= 0)
    template = "x Schwimmlehrer in Berlin Friedrichshain-Kreuzberg";
  if (params.district.indexOf("charlottenburg-wilmersdorf") >= 0)
    template = "x Schwimmlehrer in Berlin Charlottenburg-Wilmersdorf gefunden";
  if (params.district.indexOf("marzahn-hellersdorf") >= 0)
    template = "x Schwimmlehrer in Berlin Marzahn-Hellersdorf gefunden";
  if (params.district.indexOf("mitte") >= 0)
    template = "x Schwimmlehrer in Berlin Mitte gefunden";
  if (params.district.indexOf("neukölln") >= 0)
    template = "x Schwimmlehrer in Berlin Neukölln gefunden";
  if (params.district.indexOf("pankow") >= 0)
    template = "x Schwimmlehrer in Berlin Pankow gefunden";
  if (params.district.indexOf("reinickendorf") >= 0)
    template = "x Schwimmlehrer in Berlin Reinickendorf gefunden";
  if (params.district.indexOf("spandau") >= 0)
    template = "x Schwimmlehrer in Berlin Spandau gefunden";
  if (params.district.indexOf("steglitz-zehlendorf") >= 0)
    template = "x Schwimmlehrer in Berlin Steglitz-Zehlendorf gefunden";
  if (params.district.indexOf("tempelhof-schöneberg") >= 0)
    template = "x Schwimmlehrer in Berlin Tempelhof-Schöneberg gefunden";
  if (params.district.indexOf("treptow-köpenick") >= 0)
    template = "x Schwimmlehrer in Berlin Treptow-Köpenick gefunden";

  return (
    <TeacherResultPage
      searchParams={searchParams}
      headline={{
        template: template,
        replaceWithNumberOfResults: "x",
      }}
    />
  );
}
