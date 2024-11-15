import { TeacherResultPage } from "@/app/_features/teacher/teacher-result-page/TeacherResultPage";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pool: string }>;
}): Promise<Metadata> {
  const paramsUsable = await params;

  if (paramsUsable.pool.indexOf(encodeURIComponent("stadtbad-neukölln")) >= 0) {
    return {
      title: "Schwimmlehrer im Stadtbad Neukölln",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Stadtbad Neukölln. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }
  if (
    paramsUsable.pool.indexOf(encodeURIComponent("schwimmhalle-sewanstraße")) >=
    0
  ) {
    return {
      title: "Schwimmlehrer in der Schwimmhalle Sewanstraße",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in der Schwimmhalle Sewanstraße. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }
  if (
    paramsUsable.pool.indexOf(
      encodeURIComponent("schwimmhalle-fischerinsel")
    ) >= 0
  ) {
    return {
      title: "Schwimmlehrer in der Schwimmhalle Fischerinsel",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in der Schwimmhalle Fischerinsel. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }
  if (paramsUsable.pool.indexOf(encodeURIComponent("stadtbad-mitte")) >= 0) {
    return {
      title: 'Schwimmlehrer im Stadtbad Mitte "James Simon"',
      description:
        'Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Stadtbad Mitte "James Simon". Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.',
    };
  }
  if (
    paramsUsable.pool.indexOf(encodeURIComponent("stadtbad-tiergarten")) >= 0
  ) {
    return {
      title: "Schwimmlehrer im Stadtbad Tiergarten",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Stadtbad Tiergarten. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }
  if (paramsUsable.pool.indexOf(encodeURIComponent("sse")) >= 0) {
    return {
      title:
        "Schwimmlehrer in der Schwimm- und Sprunghalle im Europasportpark (SSE)",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in der Schwimm- und Sprunghalle im Europasportpark (SSE). Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }
  if (
    paramsUsable.pool.indexOf(
      encodeURIComponent("schwimmhalle-anton-saefkow-platz")
    ) >= 0
  ) {
    return {
      title: "Schwimmlehrer in der Schwimmhalle Anton-Saefkow-Platz",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in der Schwimmhalle Anton-Saefkow-Platz. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(encodeURIComponent("stadtbad-spandau-nord")) >= 0
  ) {
    return {
      title: "Schwimmlehrer im Stadtbad Spandau Nord",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Stadtbad Spandau Nord. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }
  if (
    paramsUsable.pool.indexOf(encodeURIComponent("stadtbad-spandau-nord")) >= 0
  ) {
    return {
      title: "Schwimmlehrer im Stadtbad Spandau Nord",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Stadtbad Spandau Nord. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }
  if (
    paramsUsable.pool.indexOf(
      encodeURIComponent("schwimmhalle-helene-weigelt-platz")
    ) >= 0
  ) {
    return {
      title:
        'Schwimmlehrer in der Schwimmhalle Helene-Weigel-Platz "Helmut Behrendt"',
      description:
        'Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in der Schwimmhalle Helene-Weigel-Platz "Helmut Behrendt". Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.',
    };
  }

  if (
    paramsUsable.pool.indexOf(
      encodeURIComponent("sport-und-lehrschwimmhalle-schöeneberg")
    ) >= 0
  ) {
    return {
      title: "Schwimmlehrer in der Sport- und Lehrschwimmhalle Schöneberg",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in der Sport- und Lehrschwimmhalle Schöneberg. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(
      encodeURIComponent("stadtbad-märkisches-viertel")
    ) >= 0
  ) {
    return {
      title: "Schwimmlehrer im Stadtbad Märkisches Viertel",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Stadtbad Märkisches Viertel. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(encodeURIComponent("schwimmhalle-im-fez")) >= 0
  ) {
    return {
      title: "Schwimmlehrer in der Schwimmhalle im FEZ",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in der Schwimmhalle im FEZ. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(encodeURIComponent("kombibad-gropiusstadt")) >= 0
  ) {
    return {
      title: "Schwimmlehrer im Kombibad Gropiusstadt",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Kombibad Gropiusstadt. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(
      encodeURIComponent("schwimmhalle-allendeviertel")
    ) >= 0
  ) {
    return {
      title: "Schwimmlehrer in der Schwimmhalle Allendeviertel",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in der Schwimmhalle Allendeviertel. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(
      encodeURIComponent("schwimmhalle-baumschulenweg")
    ) >= 0
  ) {
    return {
      title: "Schwimmlehrer in der Schwimmhalle Baumschulenweg",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in der Schwimmhalle Baumschulenweg. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (paramsUsable.pool.indexOf(encodeURIComponent("schwimmhalle-buch")) >= 0) {
    return {
      title: "Schwimmlehrer in der Schwimmhalle Buch",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in der Schwimmhalle Buch. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(
      encodeURIComponent("schwimmhalle-ernst-thälmann-park")
    ) >= 0
  ) {
    return {
      title: "Schwimmlehrer in der Schwimmhalle Ernst-Thälmann-Park",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in der Schwimmhalle Ernst-Thälmann-Park. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(
      encodeURIComponent("schwimmhalle-finckensteinallee")
    ) >= 0
  ) {
    return {
      title: "Schwimmlehrer in der Schwimmhalle Finckensteinallee",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in der Schwimmhalle Finckensteinallee. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(encodeURIComponent("forumbad-olympiastadion")) >=
    0
  ) {
    return {
      title: "Schwimmlehrer im Forumbad Olympiastadion",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Forumbad Olympiastadion. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(encodeURIComponent("schwimmhalle-hüttenweg")) >= 0
  ) {
    return {
      title: "Schwimmlehrer in der Schwimmhalle Hüttenweg",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in der Schwimmhalle Hüttenweg. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(encodeURIComponent("schwimmhalle-kaulsdorf")) >= 0
  ) {
    return {
      title: "Schwimmlehrer in der Schwimmhalle Kaulsdorf",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in der Schwimmhalle Kaulsdorf. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(encodeURIComponent("schwimmhalle-kreuzberg")) >= 0
  ) {
    return {
      title: "Schwimmlehrer in der Schwimmhalle Kreuzberg",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in der Schwimmhalle Kreuzberg. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(
      encodeURIComponent("schwimmhalle-thomas-mann-straße")
    ) >= 0
  ) {
    return {
      title: "Schwimmlehrer in der Schwimmhalle Thomas-Mann-Straße",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in der Schwimmhalle Thomas-Mann-Straße. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(
      encodeURIComponent("sportforum-hohenschönhausen")
    ) >= 0
  ) {
    return {
      title: "Schwimmlehrer im Sportforum Hohenschönhausen",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Sportforum Hohenschönhausen. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (paramsUsable.pool.indexOf(encodeURIComponent("stadtbad-lankwitz")) >= 0) {
    return {
      title: "Schwimmlehrer im Stadtbad Lankwitz",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Stadtbad Lankwitz. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(encodeURIComponent("stadtbad-tempelhof")) >= 0
  ) {
    return {
      title: "Schwimmlehrer im Stadtbad Tempelhof",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Stadtbad Tempelhof. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(
      encodeURIComponent("kombibad-spandau-süd-hallenbad")
    ) >= 0
  ) {
    return {
      title: "Schwimmlehrer im Kombibad Spandau Süd - Hallenbad",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Kombibad Spandau Süd - Hallenbad. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(encodeURIComponent("stadtbad-wilmersdorf-1")) >= 0
  ) {
    return {
      title: "Schwimmlehrer im Stadtbad Wilmersdorf 1",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Stadtbad Wilmersdorf 1. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(encodeURIComponent("stadtbad-wilmersdorf-2")) >= 0
  ) {
    return {
      title: "Schwimmlehrer im Stadtbad Wilmersdorf 2",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Stadtbad Wilmersdorf 2. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(encodeURIComponent("sommerbad-kreuzberg")) >= 0
  ) {
    return {
      title: "Schwimmlehrer im Sommerbad Kreuzberg",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Sommerbad Kreuzberg. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(encodeURIComponent("kinderbad-monbijou")) >= 0
  ) {
    return {
      title: "Schwimmlehrer im Kinderbad Monbijou",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Kinderbad Monbijou. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(
      encodeURIComponent("kombibad-gropiusstadt-sommerbad")
    ) >= 0
  ) {
    return {
      title: "Schwimmlehrer im Kombibad Gropiusstadt - Sommerbad",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Kombibad Gropiusstadt - Sommerbad. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(
      encodeURIComponent("kombibad-seestraße-sommerbad")
    ) >= 0
  ) {
    return {
      title: "Schwimmlehrer im Kombibad Seestraße - Sommerbad",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Kombibad Seestraße - Sommerbad. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(encodeURIComponent("sommerbad-humboldthain")) >= 0
  ) {
    return {
      title: "Schwimmlehrer im Sommerbad Humboldthain",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Sommerbad Humboldthain. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(encodeURIComponent("sommerbad-am-insulaner")) >= 0
  ) {
    return {
      title: "Schwimmlehrer im Sommerbad am Insulaner",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Sommerbad am Insulaner. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(encodeURIComponent("sommerbad-mariendorf")) >= 0
  ) {
    return {
      title: "Schwimmlehrer im Sommerbad Mariendorf",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Sommerbad Mariendorf. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(encodeURIComponent("sommerbad-neukölln")) >= 0
  ) {
    return {
      title: "Schwimmlehrer im Sommerbad Neukölln",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Sommerbad Neukölln. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(encodeURIComponent("sommerbad-olympiastadion")) >=
    0
  ) {
    return {
      title: "Schwimmlehrer im Sommerbad Olympiastadion",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Sommerbad Olympiastadion. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (paramsUsable.pool.indexOf(encodeURIComponent("sommerbad-pankow")) >= 0) {
    return {
      title: "Schwimmlehrer im Sommerbad Pankow",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Sommerbad Pankow. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(encodeURIComponent("sommerbad-staaken-west")) >= 0
  ) {
    return {
      title: "Schwimmlehrer im Sommerbad Staaken-West",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Sommerbad Staaken-West. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(encodeURIComponent("sommerbad-wilmersdorf")) >= 0
  ) {
    return {
      title: "Schwimmlehrer im Sommerbad Wilmersdorf",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Sommerbad Wilmersdorf. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(encodeURIComponent("sommerbad-wuhlheide")) >= 0
  ) {
    return {
      title: "Schwimmlehrer im Sommerbad Wuhlheide",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Sommerbad Wuhlheide. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (paramsUsable.pool.indexOf(encodeURIComponent("sommerbad-britz")) >= 0) {
    return {
      title: "Schwimmlehrer im Sommerbad Britz",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Sommerbad Britz. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.pool.indexOf(
      encodeURIComponent("stadtbad-charlottenburg-alte-halle")
    ) >= 0
  ) {
    return {
      title: "Schwimmlehrer im Stadtbad Charlottenburg - Alte Halle",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer im Stadtbad Charlottenburg - Alte Halle. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  return {
    title: "Schwimmlehrer in Berlin",
    description:
      "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in Berlin. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
  };
}

export default async function Page({
  searchParams,
  params,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  params: { pool: string };
}) {
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
  if (
    params.pool.indexOf(
      encodeURIComponent("stadtbad-charlottenburg-alte-halle")
    ) >= 0
  ) {
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
