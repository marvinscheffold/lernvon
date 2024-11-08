import { Container } from "@/app/_components/Container";
import { TEACHER_CREATE_ROUTE } from "@/app/_utils/constants/routes";
import { Typography } from "@mui/material";
import Link from "next/link";

export function PageFooter() {
  return (
    <footer className="py-16 bg-black text-white">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex flex-wrap gap-12">
            <section className="flex flex-col gap-6">
              <Typography variant="h6">Schwimmlehrer in deiner Nähe</Typography>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmlehrer in Berlin
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmlehrer in Berlin Lichtenberg
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmlehrer in Berlin Friedrichshain-Kreuzberg
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmlehrer in Berlin Charlottenburg-Wilmersdorf
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmlehrer in Berlin-Marzahn-Hellersdorf
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmlehrer in Berlin Mitte
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmlehrer in Berlin Neukölln
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmlehrer in Berlin Pankow
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmlehrer in Berlin Reinickendorf
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmlehrer in Berlin Spandau
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmlehrer in Berlin Steglitz-Zehlendorf
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmlehrer in Berlin Tempelhof-Schöneberg
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmlehrer in Berlin Treptow-Köpenick
                    </Typography>
                  </Link>
                </li>
              </ul>
            </section>
            <section className="flex flex-col gap-6">
              <Typography variant="h6">Hallenbäder in Berlin</Typography>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmunterricht Stadtbad Neukölln
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmunterricht Stadtbad Mitte „James Simon“
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmunterricht Stadtbad Tiergarten
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmunterricht SSE
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmunterricht Stadtbad Charlottenburg
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmunterricht Kombibad Seestraße Halle
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmunterricht Schwimmhalle Anton-Saefkow-Platz
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmunterricht Stadtbad Spandau Nord
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmunterricht Schwimmhalle Fischerinsel
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmunterricht Schwimmhalle Helmut Behrendt
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmunterricht Sport- und Lehrschwimmhalle Schöneberg
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmunterricht Stadtbad Märkisches Viertel
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Typography variant="body1">
                      Schwimmunterricht Schwimmhalle im FEZ
                    </Typography>
                  </Link>
                </li>
              </ul>
            </section>
          </div>
          <div className="flex flex-wrap gap-6">
            <Typography variant="subtitle1">
              © lernvon {new Date().getFullYear()}
            </Typography>
            <Link href={"/imprint"}>
              <Typography variant="subtitle1">Impressum</Typography>
            </Link>
            <Link href={"/privacy"}>
              <Typography variant="subtitle1">Datenschutz</Typography>
            </Link>
            <Link href={"/send"}>
              <Typography variant="subtitle1">Feedback senden</Typography>
            </Link>
            <Link href={TEACHER_CREATE_ROUTE}>
              <Typography variant="subtitle1">Schwimmlehrer werden</Typography>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
