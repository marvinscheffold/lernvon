import { Section } from "@/app/_components/Section";
import { TEACHER_CREATE_MANDATORY_INFORMATION_ROUTE } from "@/app/_utils/constants/routes";
import { Add } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

export async function TeacherCreatePage() {
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
}
