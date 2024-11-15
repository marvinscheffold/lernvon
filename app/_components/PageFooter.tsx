import { Container } from "@/app/_components/Container";
import {
  IMPRINT_ROUTE,
  PRIVACY_ROUTE,
  TEACHER_CREATE_ROUTE,
  SWIMMING_TEACHERS_CITY_BERLIN_DISTRICTS_ROUTE,
  SWIMMING_TEACHERS_CITY_BERLIN_ROUTE,
  SWIMMING_TEACHERS_CITY_BERLIN_POOLS_ROUTE,
} from "@/app/_utils/constants/routes";
import { Typography } from "@mui/material";
import Link from "next/link";

export function PageFooter() {
  return (
    <footer className="py-16 bg-black text-white">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex flex-wrap gap-12">
            <section className="flex flex-col gap-6">
              <Typography variant="h6" component={"h3"}>
                Schwimmlehrer in deiner Nähe
              </Typography>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href={SWIMMING_TEACHERS_CITY_BERLIN_ROUTE}>
                    <Typography variant="body2">
                      Schwimmlehrer in Berlin
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_DISTRICTS_ROUTE}/lichtenberg?pool_ids=10,2,27`}
                  >
                    <Typography variant="body2">
                      Schwimmlehrer in Berlin Lichtenberg
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_DISTRICTS_ROUTE}/friedrichshain-kreuzberg?pool_ids=25,33`}
                  >
                    <Typography variant="body2">
                      Schwimmlehrer in Berlin Friedrichshain-Kreuzberg
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_DISTRICTS_ROUTE}/charlottenburg-wilmersdorf?pool_ids=22,8,31,32,41,44`}
                  >
                    <Typography variant="body2">
                      Schwimmlehrer in Berlin Charlottenburg-Wilmersdorf
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_DISTRICTS_ROUTE}/marzahn-hellersdorf?pool_ids=12,24`}
                  >
                    <Typography variant="body2">
                      Schwimmlehrer in Berlin-Marzahn-Hellersdorf
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_DISTRICTS_ROUTE}/mitte?pool_ids=9,36,3,5,6,34,37`}
                  >
                    <Typography variant="body2">
                      Schwimmlehrer in Berlin Mitte
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_DISTRICTS_ROUTE}/neukölln?pool_ids=16,35,40,1,46`}
                  >
                    <Typography variant="body2">
                      Schwimmlehrer in Berlin Neukölln
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_DISTRICTS_ROUTE}/pankow?pool_ids=7,19,20,26,42`}
                  >
                    <Typography variant="body2">
                      Schwimmlehrer in Berlin Pankow
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_DISTRICTS_ROUTE}/reinickendorf?pool_ids=14`}
                  >
                    <Typography variant="body2">
                      Schwimmlehrer in Berlin Reinickendorf
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_DISTRICTS_ROUTE}/spandau?pool_ids=11,30,43`}
                  >
                    <Typography variant="body2">
                      Schwimmlehrer in Berlin Spandau
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_DISTRICTS_ROUTE}/steglitz-zehlendorf?pool_ids=21,23,28,38`}
                  >
                    <Typography variant="body2">
                      Schwimmlehrer in Berlin Steglitz-Zehlendorf
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_DISTRICTS_ROUTE}/tempelhof-schöneberg?pool_ids=13,29,39`}
                  >
                    <Typography variant="body2">
                      Schwimmlehrer in Berlin Tempelhof-Schöneberg
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_DISTRICTS_ROUTE}/treptow-köpenick?pool_ids=45,17,18`}
                  >
                    <Typography variant="body2">
                      Schwimmlehrer in Berlin Treptow-Köpenick
                    </Typography>
                  </Link>
                </li>
              </ul>
            </section>
            <section className="flex flex-col gap-6">
              <Typography variant="h6" component={"h3"}>
                Hallenbäder in Berlin
              </Typography>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_POOLS_ROUTE}/stadtbad-neukölln?pool_ids=1`}
                  >
                    <Typography variant="body2">
                      Schwimmunterricht Stadtbad Neukölln
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_POOLS_ROUTE}/stadtbad-mitte?pool_ids=5`}
                  >
                    <Typography variant="body2">
                      Schwimmunterricht Stadtbad Mitte „James Simon“
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_POOLS_ROUTE}/stadtbad-tiergarten?pool_ids=6`}
                  >
                    <Typography variant="body2">
                      Schwimmunterricht Stadtbad Tiergarten
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_POOLS_ROUTE}/sse?pool_ids=7`}
                  >
                    <Typography variant="body2">
                      Schwimmunterricht SSE
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_POOLS_ROUTE}?pool_ids=8`}
                  >
                    <Typography variant="body2">
                      Schwimmunterricht Stadtbad Charlottenburg
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_POOLS_ROUTE}/kombibad-seestraße-halle?pool_ids=9`}
                  >
                    <Typography variant="body2">
                      Schwimmunterricht Kombibad Seestraße Halle
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_POOLS_ROUTE}/schwimmhalle-anton-saefkow-platz?pool_ids=10`}
                  >
                    <Typography variant="body2">
                      Schwimmunterricht Schwimmhalle Anton-Saefkow-Platz
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_POOLS_ROUTE}/stadtbad-spandau-nord?pool_ids=11`}
                  >
                    <Typography variant="body2">
                      Schwimmunterricht Stadtbad Spandau Nord
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_POOLS_ROUTE}/schwimmhalle-fischerinsel?pool_ids=3`}
                  >
                    <Typography variant="body2">
                      Schwimmunterricht Schwimmhalle Fischerinsel
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_POOLS_ROUTE}/schwimmhalle-helene-weigelt-platz?pool_ids=12`}
                  >
                    <Typography variant="body2">
                      Schwimmunterricht Schwimmhalle Helene Weigelt Platz
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_POOLS_ROUTE}/sport-und-lehrschwimmhalle-schöeneberg?pool_ids=13`}
                  >
                    <Typography variant="body2">
                      Schwimmunterricht Sport- und Lehrschwimmhalle Schöneberg
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_POOLS_ROUTE}/stadtbad-märkisches-viertel?pool_ids=14`}
                  >
                    <Typography variant="body2">
                      Schwimmunterricht Stadtbad Märkisches Viertel
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${SWIMMING_TEACHERS_CITY_BERLIN_POOLS_ROUTE}/schwimmhalle-im-fez?pool_ids=15`}
                  >
                    <Typography variant="body2">
                      Schwimmunterricht Schwimmhalle im FEZ
                    </Typography>
                  </Link>
                </li>
              </ul>
            </section>
          </div>
          <div className="flex flex-wrap gap-6">
            <Typography variant="body2">
              © lernvon {new Date().getFullYear()}
            </Typography>
            <Link href={IMPRINT_ROUTE}>
              <Typography variant="body2">Impressum</Typography>
            </Link>
            <Link href={PRIVACY_ROUTE}>
              <Typography variant="body2">Datenschutz</Typography>
            </Link>
            <Link href={"mailto:info@lernvon.de"}>
              <Typography variant="body2">Feedback senden</Typography>
            </Link>
            <Link href={TEACHER_CREATE_ROUTE}>
              <Typography variant="body2">Schwimmlehrer werden</Typography>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
