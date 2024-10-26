import { Section } from "@/app/_components/Section";
import { TeacherDeleteButton } from "@/app/_features/teacher/TeacherDeleteButton";
import { TeacherOverviewTable } from "@/app/_features/teacher/TeacherOverviewTable";
import { TeacherToggleVisibilityButton } from "@/app/_features/teacher/TeacherToggleVisibilityButton";
import {
  TEACHER_CREATE_MANDATORY_INFORMATION_ROUTE,
  TEACHER_ROUTE,
} from "@/app/_utils/constants/routes";
import { getDateAsDDMMYYYYHHMMSS } from "@/app/_utils/getDateAsDDMMYYYYHHMMSS";
import { httpResponseStatusCode } from "@/app/_utils/httpResponseStatusCode";
import { createSupabaseServerClient } from "@/app/_utils/supabase/createSupabaseServerClient";
import { createSupabaseServiceRoleClient } from "@/app/_utils/supabase/createSupabaseServiceRoleClient";
import { Add, OpenInNew } from "@mui/icons-material";
import {
  Alert,
  AlertTitle,
  Button,
  Chip,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default async function Page() {
  const {
    data: { user },
    error: userError,
  } = await createSupabaseServerClient().auth.getUser();

  if (!user || userError) throw httpResponseStatusCode.Unauthorized;

  const { data: teacher } = await createSupabaseServiceRoleClient()
    .from("teacher")
    .select()
    .eq("userId", user.id)
    .single();

  if (!teacher)
    return (
      <Section>
        <Typography variant="h5">Overview</Typography>
        <Typography variant="body1">
          You didnt create a teacher profile yet
        </Typography>
        <Link href={TEACHER_CREATE_MANDATORY_INFORMATION_ROUTE}>
          <Button variant="contained" startIcon={<Add />}>
            Create Profile
          </Button>
        </Link>
      </Section>
    );

  return (
    <Section>
      <Typography variant="h5">Overview</Typography>
      {!teacher.isVisible && (
        <Alert severity="warning" variant="outlined">
          <AlertTitle>Your profile is invisible</AlertTitle>
          This means nobody can find your profile or contact you.
          {teacher.name === null ||
          teacher.email === null ||
          teacher.videoThumbnailPath === null ||
          teacher.pricePerHour === null ? (
            <div className="flex flex-col">
              Fill out all mandatory information to make your profile visible.
              <div className="mt-2">
                <Link href={TEACHER_CREATE_MANDATORY_INFORMATION_ROUTE}>
                  <Button variant="contained" startIcon={<Add />}>
                    Fill out mandatory information
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
      <TeacherOverviewTable teacher={teacher} />
      <div className="flex flex-col md:flex-row gap-4">
        <Link href={TEACHER_ROUTE(teacher.id)} target="_blank">
          <Button variant="outlined" startIcon={<OpenInNew />}>
            Open live preview
          </Button>
        </Link>
        <TeacherToggleVisibilityButton teacher={teacher} />
        <TeacherDeleteButton />
      </div>
    </Section>
  );
}
