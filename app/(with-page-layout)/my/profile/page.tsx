import { Section } from "@/app/_components/Section";
import { TeacherDeleteButton } from "@/app/_features/teacher/TeacherDeleteButton";
import { TeacherToggleVisibilityButton } from "@/app/_features/teacher/TeacherToggleVisibilityButton";
import {
  TEACHER_CREATE_MANDATORY_INFORMATION_ROUTE,
  TEACHER_ROUTE,
} from "@/app/_utils/constants/routes";
import { getDateAsDDMMYYYYHHMMSS } from "@/app/_utils/getDateAsDDMMYYYYHHMMSS";
import { httpResponseStatusCode } from "@/app/_utils/httpResponseStatusCode";
import { createSupabaseServerClient } from "@/app/_utils/supabase/createSupabaseServerClient";
import { createSupabaseServiceRoleClient } from "@/app/_utils/supabase/createSupabaseServiceRoleClient";
import { Add, Delete, OpenInNew, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
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

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price per hour</TableCell>
            <TableCell>Video added</TableCell>
            <TableCell>Visible</TableCell>
            <TableCell>Last updated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              {teacher.name || "⎯"}
            </TableCell>
            <TableCell>{teacher.pricePerHour || "⎯"} €</TableCell>
            <TableCell>{teacher.videoUrl ? "yes" : "no"}</TableCell>
            <TableCell>
              {teacher.isVisible ? (
                <Chip label="Visible" variant="outlined" color="success" />
              ) : (
                <Chip label="Invisible" variant="outlined" color="error" />
              )}
            </TableCell>
            <TableCell>
              {getDateAsDDMMYYYYHHMMSS("de", teacher.updatedAt)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="flex gap-4">
        <Link href={TEACHER_ROUTE(teacher.id)} target="_blank">
          <Button variant="contained" startIcon={<OpenInNew />}>
            Open live preview
          </Button>
        </Link>
        <TeacherToggleVisibilityButton isVisible={teacher.isVisible} />
        <TeacherDeleteButton />
      </div>
    </Section>
  );
}
