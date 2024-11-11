import { TeacherResultPage } from "@/app/_features/teacher/teacher-result-page/TeacherResultPage";

export default async function Page({
  searchParams,
  params,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  params: { pool: string };
}) {
  console.log(params.pool);
  let template = "x Schwimmlehrer in Berlin gefunden";
  if (params.pool.indexOf(encodeURIComponent("stadtbad-neukölln")) >= 0) {
    template = "x Schwimmlehrer im Stadtbad Neukölln gefunden";
  }
  if (
    params.pool.indexOf(encodeURIComponent("schwimmhalle-sewanstraße")) >= 0
  ) {
    template = "x Schwimmlehrer in der Schwimmhalle Sewanstraße gefunden";
  }
  if (
    params.pool.indexOf(encodeURIComponent("schwimmhalle-fischerinsel")) >= 0
  ) {
    template = "x Schwimmlehrer in der Schwimmhalle Fischerinsel gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("stadtbad-mitte")) >= 0) {
    template = 'x Schwimmlehrer im Stadtbad Mitte "James Simon" gefunden';
  }
  if (params.pool.indexOf(encodeURIComponent("stadtbad-tiergarten")) >= 0) {
    template = "x Schwimmlehrer im Stadtbad Tiergartengefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("sse")) >= 0) {
    template =
      "x Schwimmlehrer in der Schwimm- und Sprunghalle im Europasportpark (SSE) gefunden";
  }
  if (
    params.pool.indexOf(encodeURIComponent("kombibad-seestraße-halle")) >= 0
  ) {
    template = "x Schwimmlehrer im Kombibad Seestraße Halle gefunden";
  }
  if (
    params.pool.indexOf(
      encodeURIComponent("schwimmhalle-anton-saefkow-platz")
    ) >= 0
  ) {
    template =
      "x Schwimmlehrer in der Schwimmhalle Anton-Saefkow-Platz gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("stadtbad-spandau-nord")) >= 0) {
    template = "x Schwimmlehrer im Stadtbad Spandau Nord gefunden";
  }
  if (
    params.pool.indexOf(
      encodeURIComponent("schwimmhalle-helene-weigelt-platz")
    ) >= 0
  ) {
    template =
      'x Schwimmlehrer in der Schwimmhalle Helene-Weigel-Platz "Helmut Behrendt" gefunden';
  }
  if (
    params.pool.indexOf(
      encodeURIComponent("sport-und-lehrschwimmhalle-schöeneberg")
    ) >= 0
  ) {
    template =
      "x Schwimmlehrer in der Sport- und Lehrschwimmhalle Schöneberg gefunden";
  }
  if (
    params.pool.indexOf(encodeURIComponent("stadtbad-märkisches-viertel")) >= 0
  ) {
    template = "x Schwimmlehrer im Stadtbad Märkisches Viertel gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("schwimmhalle-im-fez")) >= 0) {
    template = "x Schwimmlehrer in der Schwimmhalle im FEZ gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("kombibad-gropiusstadt")) >= 0) {
    template = "x Schwimmlehrer im Kombibad Gropiusstadt gefunden";
  }
  if (
    params.pool.indexOf(encodeURIComponent("schwimmhalle-allendeviertel")) >= 0
  ) {
    template = "x Schwimmlehrer in der Schwimmhalle Allendeviertel gefunden";
  }
  if (
    params.pool.indexOf(encodeURIComponent("schwimmhalle-baumschulenweg")) >= 0
  ) {
    template = "x Schwimmlehrer in der Schwimmhalle Baumschulenweg gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("schwimmhalle-buch")) >= 0) {
    template = "x Schwimmlehrer in der Schwimmhalle Buch gefunden";
  }
  if (
    params.pool.indexOf(
      encodeURIComponent("schwimmhalle-ernst-thälmann-park")
    ) >= 0
  ) {
    template =
      "x Schwimmlehrer in der Schwimmhalle Ernst-Thälmann-Park gefunden";
  }
  if (
    params.pool.indexOf(encodeURIComponent("schwimmhalle-finckensteinallee")) >=
    0
  ) {
    template = "x Schwimmlehrer in der Schwimmhalle Finckensteinallee gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("forumbad-olympiastadion")) >= 0) {
    template = "x Schwimmlehrer im Forumbad Olympiastadion gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("schwimmhalle-hüttenweg")) >= 0) {
    template = "x Schwimmlehrer in der Schwimmhalle Hüttenweg gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("schwimmhalle-kaulsdorf")) >= 0) {
    template = "x Schwimmlehrer in der Schwimmhalle Kaulsdorf gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("schwimmhalle-kreuzberg")) >= 0) {
    template = "x Schwimmlehrer in der Schwimmhalle Kreuzberg gefunden";
  }
  if (
    params.pool.indexOf(
      encodeURIComponent("schwimmhalle-thomas-mann-straße")
    ) >= 0
  ) {
    template =
      "x Schwimmlehrer in der Schwimmhalle Thomas-Mann-Straße gefunden";
  }
  if (
    params.pool.indexOf(encodeURIComponent("sportforum-hohenschönhausen")) >= 0
  ) {
    template = "x Schwimmlehrer im Sportforum Hohenschönhausen gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("stadtbad-lankwitz")) >= 0) {
    template = "x Schwimmlehrer im Stadtbad Lankwitz gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("stadtbad-tempelhof")) >= 0) {
    template = "x Schwimmlehrer im Stadtbad Tempelhof gefunden";
  }
  if (
    params.pool.indexOf(encodeURIComponent("kombibad-spandau-süd-hallenbad")) >=
    0
  ) {
    template = "x Schwimmlehrer im Kombibad Spandau Süd - Hallenbad gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("stadtbad-wilmersdorf-1")) >= 0) {
    template = "x Schwimmlehrer im Stadtbad Wilmersdorf 1 gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("stadtbad-wilmersdorf-2")) >= 0) {
    template = "x Schwimmlehrer im Stadtbad Wilmersdorf 2 gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("sommerbad-kreuzberg")) >= 0) {
    template = "x Schwimmlehrer im Sommerbad Kreuzberg gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("kinderbad-monbijou")) >= 0) {
    template = "x Schwimmlehrer im Kinderbad Monbijou gefunden";
  }
  if (
    params.pool.indexOf(
      encodeURIComponent("kombibad-gropiusstadt-sommerbad")
    ) >= 0
  ) {
    template = "x Schwimmlehrer im Kombibad Gropiusstadt - Sommerbad gefunden";
  }
  if (
    params.pool.indexOf(encodeURIComponent("kombibad-seestraße-sommerbad")) >= 0
  ) {
    template = "x Schwimmlehrer im Kombibad Seestraße - Sommerbad gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("sommerbad-humboldthain")) >= 0) {
    template = "x Schwimmlehrer im Sommerbad Humboldthain gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("sommerbad-am-insulaner")) >= 0) {
    template = "x Schwimmlehrer im Sommerbad am Insulaner gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("sommerbad-mariendorf")) >= 0) {
    template = "x Schwimmlehrer im Sommerbad Mariendorf gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("sommerbad-neukölln")) >= 0) {
    template = "x Schwimmlehrer im Sommerbad Neukölln gefunden";
  }
  if (
    params.pool.indexOf(encodeURIComponent("sommerbad-olympiastadion")) >= 0
  ) {
    template = "x Schwimmlehrer im Sommerbad Olympiastadion gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("sommerbad-pankow")) >= 0) {
    template = "x Schwimmlehrer im Sommerbad Pankow gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("sommerbad-staaken-west")) >= 0) {
    template = "x Schwimmlehrer im Sommerbad Staaken-West gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("sommerbad-wilmersdorf")) >= 0) {
    template = "x Schwimmlehrer im Sommerbad Wilmersdorf gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("sommerbad-wuhlheide")) >= 0) {
    template = "x Schwimmlehrer im Sommerbad Wuhlheide gefunden";
  }
  if (params.pool.indexOf(encodeURIComponent("sommerbad-britz")) >= 0) {
    template = "x Schwimmlehrer im Sommerbad Britz gefunden";
  }
  if (params.pool.indexOf("stadtbad-charlottenburg-alte-halle") >= 0) {
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
