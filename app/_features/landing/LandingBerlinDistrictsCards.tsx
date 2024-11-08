"use client";

import { Add, ChevronRight, Remove } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export function LandingBerlinDistrictsCards() {
  const [isExpanded, setIsExpanded] = useState(false);

  const districts = [
    {
      linkHref: "",
      linkTitle: "Schwimmlehrer in Berlin Charlottenburg-Wilmersdorf",
      title: "Charlottenburg-Wilmersdorf",
      subTitle: "18 Schwimmlehrer",
    },
    {
      linkHref: "",
      linkTitle: "Schwimmlehrer in Berlin Friedrichshain-Kreuzberg",
      title: "Friedrichshain-Kreuzberg",
      subTitle: "18 Schwimmlehrer",
    },
    {
      linkHref: "",
      linkTitle: "Schwimmlehrer in Berlin Lichtenberg",
      title: "Lichtenberg",
      subTitle: "18 Schwimmlehrer",
    },
    {
      linkHref: "",
      linkTitle: "Schwimmlehrer in Berlin Marzahn-Hellersdorf",
      title: "Marzahn-Hellersdorf",
      subTitle: "18 Schwimmlehrer",
    },
    {
      linkHref: "",
      linkTitle: "Schwimmlehrer in Berlin Mitte",
      title: "Mitte",
      subTitle: "18 Schwimmlehrer",
    },
    {
      linkHref: "",
      linkTitle: "Schwimmlehrer in Berlin Neukölln",
      title: "Neukölln",
      subTitle: "18 Schwimmlehrer",
    },
    {
      linkHref: "",
      linkTitle: "Schwimmlehrer in Berlin Pankow",
      title: "Pankow",
      subTitle: "18 Schwimmlehrer",
    },
    {
      linkHref: "",
      linkTitle: "Schwimmlehrer in Berlin Reinickendorf",
      title: "Reinickendorf",
      subTitle: "18 Schwimmlehrer",
    },
    {
      linkHref: "",
      linkTitle: "Schwimmlehrer in Berlin Spandau",
      title: "Spandau",
      subTitle: "18 Schwimmlehrer",
    },
    {
      linkHref: "",
      linkTitle: "Schwimmlehrer in Berlin Steglitz-Zehlendorf",
      title: "Steglitz-Zehlendorf",
      subTitle: "18 Schwimmlehrer",
    },
    {
      linkHref: "",
      linkTitle: "Schwimmlehrer in Berlin Tempelhof-Schöneberg",
      title: "Tempelhof-Schöneberg",
      subTitle: "18 Schwimmlehrer",
    },
    {
      linkHref: "",
      linkTitle: "Schwimmlehrer in Berlin Treptow-Köpenick",
      title: "Treptow-Köpenick",
      subTitle: "18 Schwimmlehrer",
    },
  ];

  return (
    <>
      <ul className="grid gap-0 lg:gap-4 grid-cols-1 lg:grid-cols-3">
        {districts.slice(0, 6).map((d) => (
          <Card
            key={d.linkHref}
            linkHref={d.linkHref}
            linkTitle={d.linkTitle}
            title={d.title}
            subTitle={d.subTitle}
          />
        ))}
      </ul>
      <div className="pt-6">
        <Button
          size="large"
          color="secondary"
          startIcon={isExpanded ? <Remove /> : <Add />}
          onClick={() => setIsExpanded((s) => !s)}
        >
          {isExpanded ? "Bezirke ausblenden" : "Alle Bezirke anzeigen"}
        </Button>
      </div>
      {isExpanded && (
        <ul className="grid gap-0 lg:gap-4 grid-cols-1 lg:grid-cols-3">
          {districts.slice(0, 6).map((d) => (
            <Card
              key={d.linkHref}
              linkHref={d.linkHref}
              linkTitle={d.linkTitle}
              title={d.title}
              subTitle={d.subTitle}
            />
          ))}
        </ul>
      )}
    </>
  );
}

function Card({
  linkHref,
  linkTitle,
  title,
  subTitle,
}: {
  linkHref: string;
  linkTitle: string;
  title: string;
  subTitle: string;
}) {
  return (
    <Link
      href={linkHref}
      title={linkTitle}
      className="border-b lg:border rounded-none lg:rounded-l"
    >
      <li className="lg:h-full border-neutral-100 flex items-center gap-6 p-6">
        <div className="flex flex-col flex-grow">
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body1">{subTitle}</Typography>
        </div>

        <ChevronRight className="!text-4xl" />
      </li>
    </Link>
  );
}
