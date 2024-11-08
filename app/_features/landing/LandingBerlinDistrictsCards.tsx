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
      <ul
        className={`grid gap-0 lg:gap-4 grid-cols-1 lg:grid-cols-3 ${
          isExpanded ? "" : "hidden"
        }`}
      >
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
    <li>
      <Link
        href={linkHref}
        title={linkTitle}
        className="border-b lg:border rounded-none lg:rounded-lg border-neutral-100 lg:h-full flex items-center gap-4 md:gap-6 p-6"
      >
        <div className="flex flex-col flex-grow">
          <Typography
            sx={{ typography: { xs: "h5", md: "h4" } }}
            component={"p"}
          >
            {title}
          </Typography>
          <Typography
            sx={{ typography: { xs: "body2", md: "body1" } }}
            component={"p"}
            color="textSecondary"
          >
            {subTitle}
          </Typography>
        </div>
        <ChevronRight className="!text-4xl" />
      </Link>
    </li>
  );
}
