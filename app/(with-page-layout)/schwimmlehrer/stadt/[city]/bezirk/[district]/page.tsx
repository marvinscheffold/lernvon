import { TeacherResultPage } from "@/app/_features/teacher/teacher-result-page/TeacherResultPage";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ district: string }>;
}): Promise<Metadata> {
  const paramsUsable = await params;

  if (paramsUsable.district.indexOf(encodeURIComponent("lichtenberg")) >= 0) {
    return {
      title:
        "Schwimmlehrer in Berlin Lichtenberg - Privater Schwimmunterricht ab 15€ pro Stunde | lernvon",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in Berlin Lichtenberg. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.district.indexOf(
      encodeURIComponent("friedrichshain-kreuzberg")
    ) >= 0
  ) {
    return {
      title:
        "Schwimmlehrer in Berlin Friedrichshain-Kreuzberg - Privater Schwimmunterricht ab 15€ pro Stunde | lernvon",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in Berlin Friedrichshain-Kreuzberg. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.district.indexOf(
      encodeURIComponent("charlottenburg-wilmersdorf")
    ) >= 0
  ) {
    return {
      title:
        "Schwimmlehrer in Berlin Charlottenburg-Wilmersdorf - Privater Schwimmunterricht ab 15€ pro Stunde | lernvon",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in Berlin Charlottenburg-Wilmersdorf. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.district.indexOf(encodeURIComponent("marzahn-hellersdorf")) >=
    0
  ) {
    return {
      title:
        "Schwimmlehrer in Berlin Marzahn-Hellersdorf - Privater Schwimmunterricht ab 15€ pro Stunde | lernvon",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in Berlin Marzahn-Hellersdorf. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (paramsUsable.district.indexOf(encodeURIComponent("mitte")) >= 0) {
    return {
      title:
        "Schwimmlehrer in Berlin Mitte - Privater Schwimmunterricht ab 15€ pro Stunde | lernvon",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in Berlin Mitte. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (paramsUsable.district.indexOf(encodeURIComponent("neukölln")) >= 0) {
    return {
      title:
        "Schwimmlehrer in Berlin Neukölln - Privater Schwimmunterricht ab 15€ pro Stunde | lernvon",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in Berlin Neukölln. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (paramsUsable.district.indexOf(encodeURIComponent("pankow")) >= 0) {
    return {
      title:
        "Schwimmlehrer in Berlin Pankow - Privater Schwimmunterricht ab 15€ pro Stunde | lernvon",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in Berlin Pankow. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (paramsUsable.district.indexOf(encodeURIComponent("reinickendorf")) >= 0) {
    return {
      title:
        "Schwimmlehrer in Berlin Reinickendorf - Privater Schwimmunterricht ab 15€ pro Stunde | lernvon",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in Berlin Reinickendorf. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (paramsUsable.district.indexOf(encodeURIComponent("spandau")) >= 0) {
    return {
      title:
        "Schwimmlehrer in Berlin Spandau - Privater Schwimmunterricht ab 15€ pro Stunde | lernvon",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in Berlin Spandau. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.district.indexOf(encodeURIComponent("steglitz-zehlendorf")) >=
    0
  ) {
    return {
      title:
        "Schwimmlehrer in Berlin Steglitz-Zehlendorf - Privater Schwimmunterricht ab 15€ pro Stunde | lernvon",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in Berlin Steglitz-Zehlendorf. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.district.indexOf(encodeURIComponent("tempelhof-schöneberg")) >=
    0
  ) {
    return {
      title:
        "Schwimmlehrer in Berlin Tempelhof-Schöneberg - Privater Schwimmunterricht ab 15€ pro Stunde | lernvon",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in Berlin Tempelhof-Schöneberg. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  if (
    paramsUsable.district.indexOf(encodeURIComponent("treptow-köpenick")) >= 0
  ) {
    return {
      title:
        "Schwimmlehrer in Berlin Treptow-Köpenick - Privater Schwimmunterricht ab 15€ pro Stunde | lernvon",
      description:
        "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in Berlin Treptow-Köpenick. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
    };
  }

  return {
    title:
      "Schwimmlehrer in Berlin - Privater Schwimmunterricht ab 15€ pro Stunde | lernvon",
    description:
      "Vergleiche professionelle Schwimmlehrer und Schwimmtrainer in Berlin. Finde den perfekten Schwimmcoach für dich und lerne sicher schwimmen oder verbessere deine Technik.",
  };
}

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
