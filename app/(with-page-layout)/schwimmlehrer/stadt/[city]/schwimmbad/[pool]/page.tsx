import { TeacherResultPage } from "@/app/_features/teacher/teacher-result-page/TeacherResultPage";

export default async function Page({
  searchParams,
  params,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  params: { district: string };
}) {
  let template = "x Schwimmlehrer in Berlin gefunden";
  if (params.district.indexOf("stadtbad-neukölln") >= 0) {
    template = "x Schwimmlehrer im Stadtbad Neukölln gefunden";
  }
  if (params.district.indexOf("schwimmhalle-sewanstraße") >= 0) {
    template = "x Schwimmlehrer in der Schwimmhalle Sewanstraße gefunden";
  }
  if (params.district.indexOf("schwimmhalle-fischerinsel") >= 0) {
    template = "x Schwimmlehrer in der Schwimmhalle Fischerinsel gefunden";
  }
  if (params.district.indexOf("stadtbad-mitte") >= 0) {
    template = 'x Schwimmlehrer im Stadtbad Mitte "James Simon" gefunden';
  }
  if (params.district.indexOf("stadtbad-tiergarten") >= 0) {
    template = "x Schwimmlehrer im Stadtbad Tiergartengefunden";
  }
  if (params.district.indexOf("sse") >= 0) {
    template =
      "x Schwimmlehrer in der Schwimm- und Sprunghalle im Europasportpark (SSE) gefunden";
  }
  if (params.district.indexOf("kombibad-seestraße-hale") >= 0) {
    template = "x Schwimmlehrer im Kombibad Seestraße Halle gefunden";
  }
  if (params.district.indexOf("schwimmhalle-anton-saefkow-platz") >= 0) {
    template =
      "x Schwimmlehrer in der Schwimmhalle Anton-Saefkow-Platz gefunden";
  }
  if (params.district.indexOf("stadtbad-spandau-nord") >= 0) {
    template = "x Schwimmlehrer im Stadtbad Spandau Nord gefunden";
  }
  if (params.district.indexOf("schwimmhalle-helene-weigelt-platz") >= 0) {
    template =
      'x Schwimmlehrer in der Schwimmhalle Helene-Weigel-Platz "Helmut Behrendt" gefunden';
  }
  if (params.district.indexOf("sport-und-lehrschwimmhalle-schöeneberg") >= 0) {
    template =
      "x Schwimmlehrer in der Sport- und Lehrschwimmhalle Schöneberg gefunden";
  }
  if (params.district.indexOf("stadtbad-märkisches-viertel") >= 0) {
    template = "x Schwimmlehrer im Stadtbad Märkisches Viertel gefunden";
  }
  if (params.district.indexOf("schwimmhalle-im-fez") >= 0) {
    template = "x Schwimmlehrer in der Schwimmhalle im FEZ gefunden";
  }
  if (params.district.indexOf("kombibad-gropiusstadt") >= 0) {
    template = "x Schwimmlehrer im Kombibad Gropiusstadt gefunden";
  }
  if (params.district.indexOf("schwimmhalle-allendeviertel") >= 0) {
    template = "x Schwimmlehrer in der Schwimmhalle Allendeviertel gefunden";
  }
  if (params.district.indexOf("schwimmhalle-baumschulenweg") >= 0) {
    template = "x Schwimmlehrer in der Schwimmhalle Baumschulenweg gefunden";
  }
  if (params.district.indexOf("schwimmhalle-buch") >= 0) {
    template = "x Schwimmlehrer in der Schwimmhalle Buch gefunden";
  }
  if (params.district.indexOf("schwimmhalle-ernst-thälmann-park") >= 0) {
    template =
      "x Schwimmlehrer in der Schwimmhalle Ernst-Thälmann-Park gefunden";
  }
  if (params.district.indexOf("schwimmhalle-finckensteinallee") >= 0) {
    template = "x Schwimmlehrer in der Schwimmhalle Finckensteinallee gefunden";
  }
  if (params.district.indexOf("forumbad-olympiastadion") >= 0) {
    template = "x Schwimmlehrer im Forumbad Olympiastadion gefunden";
  }
  if (params.district.indexOf("schwimmhalle-hüttenweg") >= 0) {
    template = "x Schwimmlehrer in der Schwimmhalle Hüttenweg gefunden";
  }
  if (params.district.indexOf("schwimmhalle-kaulsdorf") >= 0) {
    template = "x Schwimmlehrer in der Schwimmhalle Kaulsdorf gefunden";
  }
  if (params.district.indexOf("schwimmhalle-kreuzberg") >= 0) {
    template = "x Schwimmlehrer in der Schwimmhalle Kreuzberg gefunden";
  }
  if (params.district.indexOf("schwimmhalle-thomas-mann-straße") >= 0) {
    template =
      "x Schwimmlehrer in der Schwimmhalle Thomas-Mann-Straße gefunden";
  }
  if (params.district.indexOf("sportforum-hohenschönhausen") >= 0) {
    template = "x Schwimmlehrer im Sportforum Hohenschönhausen gefunden";
  }
  if (params.district.indexOf("stadtbad-lankwitz") >= 0) {
    template = "x Schwimmlehrer im Stadtbad Lankwitz gefunden";
  }
  if (params.district.indexOf("stadtbad-tempelhof") >= 0) {
    template = "x Schwimmlehrer im Stadtbad Tempelhof gefunden";
  }
  if (params.district.indexOf("kombibad-spandau-süd-hallenbad") >= 0) {
    template = "x Schwimmlehrer im Kombibad Spandau Süd - Hallenbad gefunden";
  }
  if (params.district.indexOf("stadtbad-wilmersdorf-1") >= 0) {
    template = "x Schwimmlehrer im Stadtbad Wilmersdorf 1 gefunden";
  }
  if (params.district.indexOf("stadtbad-wilmersdorf-2") >= 0) {
    template = "x Schwimmlehrer im Stadtbad Wilmersdorf 2 gefunden";
  }
  if (params.district.indexOf("sommerbad-kreuzberg") >= 0) {
    template = "x Schwimmlehrer im Sommerbad Kreuzberg gefunden";
  }
  if (params.district.indexOf("kinderbad-monbijou") >= 0) {
    template = "x Schwimmlehrer im Kinderbad Monbijou gefunden";
  }
  if (params.district.indexOf("kombibad-gropiusstadt-sommerbad") >= 0) {
    template = "x Schwimmlehrer im Kombibad Gropiusstadt - Sommerbad gefunden";
  }
  if (params.district.indexOf("kombibad-seestraße-sommerbad") >= 0) {
    template = "x Schwimmlehrer im Kombibad Seestraße - Sommerbad gefunden";
  }
  if (params.district.indexOf("sommerbad-humboldthain") >= 0) {
    template = "x Schwimmlehrer im Sommerbad Humboldthain gefunden";
  }
  if (params.district.indexOf("sommerbad-am-insulaner") >= 0) {
    template = "x Schwimmlehrer im Sommerbad am Insulaner gefunden";
  }
  if (params.district.indexOf("sommerbad-mariendorf") >= 0) {
    template = "x Schwimmlehrer im Sommerbad Mariendorf gefunden";
  }
  if (params.district.indexOf("sommerbad-neukölln") >= 0) {
    template = "x Schwimmlehrer im Sommerbad Neukölln gefunden";
  }
  if (params.district.indexOf("sommerbad-olympiastadion") >= 0) {
    template = "x Schwimmlehrer im Sommerbad Olympiastadion gefunden";
  }
  if (params.district.indexOf("sommerbad-pankow") >= 0) {
    template = "x Schwimmlehrer im Sommerbad Pankow gefunden";
  }
  if (params.district.indexOf("sommerbad-staaken-west") >= 0) {
    template = "x Schwimmlehrer im Sommerbad Staaken-West gefunden";
  }
  if (params.district.indexOf("sommerbad-wilmersdorf") >= 0) {
    template = "x Schwimmlehrer im Sommerbad Wilmersdorf gefunden";
  }
  if (params.district.indexOf("sommerbad-wuhlheide") >= 0) {
    template = "x Schwimmlehrer im Sommerbad Wuhlheide gefunden";
  }
  if (params.district.indexOf("sommerbad-britz") >= 0) {
    template = "x Schwimmlehrer im Sommerbad Britz gefunden";
  }
  if (params.district.indexOf("stadtbad-charlottenburg-alte-halle") >= 0) {
    template =
      "x Schwimmlehrer im Stadtbad Charlottenburg - Alte Halle gefunden";
  }

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
