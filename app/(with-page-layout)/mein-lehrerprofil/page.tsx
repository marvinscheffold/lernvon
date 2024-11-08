import { Section } from "@/app/_components/Section";
import { TeacherDeleteButton } from "@/app/_features/teacher/TeacherDeleteButton";
import { TeacherCreatePageOverviewTable } from "@/app/_features/teacher/teacher-create-page/TeacherCreatePageOverviewTable";
import { TeacherToggleVisibilityButton } from "@/app/_features/teacher/TeacherToggleVisibilityButton";
import {
  TEACHER_CREATE_MANDATORY_INFORMATION_ROUTE,
  TEACHER_ROUTE,
} from "@/app/_utils/constants/routes";
import { httpResponseStatusCode } from "@/app/_utils/httpResponseStatusCode";
import { createSupabaseServerClient } from "@/app/_utils/supabase/createSupabaseServerClient";
import { createSupabaseAdminClient } from "@/app/_utils/supabase/createSupabaseAdminClient";
import { Add, OpenInNew } from "@mui/icons-material";
import { Alert, AlertTitle, Button, Typography } from "@mui/material";
import Link from "next/link";

export default async function Page() {
  const {
    data: { user },
    error: userError,
  } = await createSupabaseServerClient().auth.getUser();

  if (!user || userError) throw httpResponseStatusCode.Unauthorized;

  const { data: teacher } = await createSupabaseAdminClient()
    .from("teacher")
    .select()
    .eq("userId", user.id)
    .single();

  if (!teacher)
    return (
      <Section>
        <Typography variant="h5">Übersicht</Typography>
        <Typography variant="body1">
          Du hast noch kein Lehrerprofil erstellt.
        </Typography>
        <Link href={TEACHER_CREATE_MANDATORY_INFORMATION_ROUTE}>
          <Button variant="contained" startIcon={<Add />}>
            Profil erstellen
          </Button>
        </Link>
      </Section>
    );

  return (
    <Section>
      <Typography variant="h5">Übersicht</Typography>
      {!teacher.isVisible && (
        <Alert severity="warning">
          <AlertTitle>Dein Profil ist unsichtbar</AlertTitle>
          Niemand kann dein Profil über die Suche finden.
          {teacher.name === null ||
          teacher.email === null ||
          teacher.videoThumbnailPath === null ||
          teacher.pricePerHour === null ? (
            <div className="flex flex-col">
              Fülle alle Pflichtfelder aus, um dein Profil sichtbar zu machen.
              <div className="mt-2">
                <Link href={TEACHER_CREATE_MANDATORY_INFORMATION_ROUTE}>
                  <Button variant="contained" startIcon={<Add />}>
                    Pflichtfelder ausfüllen
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="mt-2">
              <TeacherToggleVisibilityButton teacher={teacher} />
            </div>
          )}
        </Alert>
      )}
      <TeacherCreatePageOverviewTable teacher={teacher} />
      <div className="flex flex-col md:flex-row gap-4">
        <Link href={TEACHER_ROUTE(teacher.id)} target="_blank">
          <Button
            startIcon={<OpenInNew />}
            color="secondary"
            variant="contained"
            disabled={!teacher.isVisible}
          >
            Schüler Ansicht öffnen
          </Button>
        </Link>
        <TeacherToggleVisibilityButton teacher={teacher} />
        <TeacherDeleteButton />
      </div>
    </Section>
  );
}
