import { TeacherResultPage } from "@/app/_features/teacher/teacher-result-page/TeacherResultPage";

export default async function Page({
  searchParams,
  params,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  params: { district: string };
}) {
  let template = "x Schwimmlehrer in Berlin gefunden";
  if (params.district.indexOf(encodeURIComponent("lichtenberg")) >= 0)
    template = "x Schwimmlehrer in Berlin Lichtenberg gefunden";
  if (
    params.district.indexOf(encodeURIComponent("friedrichshain-kreuzberg")) >= 0
  )
    template = "x Schwimmlehrer in Berlin Friedrichshain-Kreuzberg";
  if (
    params.district.indexOf(encodeURIComponent("charlottenburg-wilmersdorf")) >=
    0
  )
    template = "x Schwimmlehrer in Berlin Charlottenburg-Wilmersdorf gefunden";
  if (params.district.indexOf(encodeURIComponent("marzahn-hellersdorf")) >= 0)
    template = "x Schwimmlehrer in Berlin Marzahn-Hellersdorf gefunden";
  if (params.district.indexOf(encodeURIComponent("mitte")) >= 0)
    template = "x Schwimmlehrer in Berlin Mitte gefunden";
  if (params.district.indexOf(encodeURIComponent("neukölln")) >= 0)
    template = "x Schwimmlehrer in Berlin Neukölln gefunden";
  if (params.district.indexOf(encodeURIComponent("pankow")) >= 0)
    template = "x Schwimmlehrer in Berlin Pankow gefunden";
  if (params.district.indexOf(encodeURIComponent("reinickendorf")) >= 0)
    template = "x Schwimmlehrer in Berlin Reinickendorf gefunden";
  if (params.district.indexOf(encodeURIComponent("spandau")) >= 0)
    template = "x Schwimmlehrer in Berlin Spandau gefunden";
  if (params.district.indexOf(encodeURIComponent("steglitz-zehlendorf")) >= 0)
    template = "x Schwimmlehrer in Berlin Steglitz-Zehlendorf gefunden";
  if (params.district.indexOf(encodeURIComponent("tempelhof-schöneberg")) >= 0)
    template = "x Schwimmlehrer in Berlin Tempelhof-Schöneberg gefunden";
  if (params.district.indexOf(encodeURIComponent("treptow-köpenick")) >= 0)
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
