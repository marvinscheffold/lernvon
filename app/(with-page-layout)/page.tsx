import { Container } from "@/app/_components/Container";
import {
  TEACHER_CREATE_ROUTE,
  TEACHERS_ROUTE,
} from "@/app/_utils/constants/routes";
import { ArrowForward } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import teacherWithStudentsImage from "@/public/images/teacher-with-students.jpg";
import teacherInWaterImage from "@/public/images/teacher-in-water.jpg";
import Image from "next/image";
import { LandingBerlinDistrictsCards } from "@/app/_features/landing/LandingBerlinDistrictsCards";

export default function Page() {
  return (
    <>
      <section className="bg-neutral-50">
        <Container hasPadding={false}>
          <div className="flex flex-col md:flex-row px-0 md:px-12 gap-0 md:gap-12">
            <div className="md:flex-grow basis-0 flex flex-col gap-8 px-6 md:px-0 pt-8 pb-12 py-0 md:py-16">
              <Typography
                component="h1"
                sx={{ typography: { xs: "h3", md: "h2" } }}
              >
                Finde die besten Schwimmlehrer in ganz Berlin
              </Typography>
              <Typography variant="h5">
                Kostenlos und ohne Anmeldung.
              </Typography>
              <div>
                <Link href={TEACHERS_ROUTE}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForward />}
                    sx={{ fontSize: "20px", fontWeight: "400" }}
                  >
                    Schwimmlehrer finden
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:flex-grow basis-0 h-auto order-first md:order-none">
              <div className="relative w-full h-64 md:h-full">
                <Image
                  className="brightness-150"
                  alt="Bild eines Schwimmlehrers der Unterricht gibt"
                  src={teacherWithStudentsImage}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "left",
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="py-2 lg:py-16">
            {/* <div className="hidden lg:flex justify-evenly mb-16">
              <div className="flex flex-col gap-2 items-center">
                <Typography variant="h4" component={"p"}>
                  90+
                </Typography>
                <Typography variant="h6" component={"p"} color="textSecondary">
                  erfahrene Schwimmlehrer
                </Typography>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <Typography variant="h4" component={"p"}>
                  36+
                </Typography>
                <Typography variant="h6" component={"p"} color="textSecondary">
                  Schwimmbäder in Berlin
                </Typography>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <Typography variant="h4" component={"p"}>
                  12+
                </Typography>
                <Typography variant="h6" component={"p"} color="textSecondary">
                  Berliner Bezirker
                </Typography>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <Typography variant="h4" component={"p"}>
                  1000+
                </Typography>
                <Typography variant="h6" component={"p"} color="textSecondary">
                  vermittelte Anfragen
                </Typography>
              </div>
            </div> */}
            <LandingBerlinDistrictsCards />
          </div>
        </Container>
      </section>
      <section className="py-16 lg:py-0">
        <div className="bg-blue-100">
          <Container>
            <div className="flex flex-col gap-4 py-12 md:py-24">
              <Typography
                sx={{ typography: { xs: "h3", md: "h2" } }}
                component={"h2"}
                className="break-words"
              >
                Lerne effektiv mit privatem Schwimmunterricht
              </Typography>
              <Typography
                sx={{ typography: { xs: "h6", md: "h5" } }}
                component={"p"}
              >
                Über 120 Schwimmlehrer in 12 Berzirken - Bei lernvon findest du
                kostenlos qualifizierte Schwimm-Coaches in Berlin.
              </Typography>
              <div className="pt-8">
                <Link href={TEACHERS_ROUTE}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForward />}
                    sx={{ fontSize: "20px", fontWeight: "400" }}
                    color="secondary"
                  >
                    Schwimmlehrer finden
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section>
        <Container>
          <div className="flex flex-col md:flex-row m-0 md:my-16 border border-transparent md:border-black">
            <div className="basis-0 flex-grow relative w-full h-[524px] md:h-[800px]">
              <Image
                alt="Bild eines Schwimmlehrers im Wasser"
                src={teacherInWaterImage}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>
            <div className="basis-0 flex-grow bg-neutral-50 flex flex-col gap-8 px-6 pt-8 pb-12 md:p-16">
              <Typography
                component={"h2"}
                sx={{ typography: { xs: "h3", md: "h2" } }}
              >
                Schwimmlehrer werden
              </Typography>
              <Typography variant="body1">
                Verdiene Geld, indem du dein Fachwissen mit Lernenden teilst.
                Melde dich kosenlos an und finde neue Schüler auf lernvon.
              </Typography>
              <ul>
                <Typography variant="h5" component={"li"}>
                  - Finde neue Schülerinnen und Schüler
                </Typography>
                <Typography variant="h5" component={"li"}>
                  - Erhalte bessere Nachrichten
                </Typography>
                <Typography variant="h5" component={"li"}>
                  - Gib langfristig Unterricht
                </Typography>
              </ul>
              <Link href={TEACHER_CREATE_ROUTE}>
                <Button
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={{ fontSize: "20px", fontWeight: "400" }}
                >
                  Schwimmlehrer werden
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
