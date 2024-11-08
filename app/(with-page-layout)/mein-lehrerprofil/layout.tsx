import { Container } from "@/app/_components/Container";
import { Typography } from "@mui/material";
import { ReactNode } from "react";
import { TeacherCreatePageNavTabs } from "@/app/_features/teacher/teacher-create-page/TeacherCreatePageNavTabs";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <div className="py-12">
        <Typography variant="h4">Mein Lehrerprofil</Typography>
      </div>
      <TeacherCreatePageNavTabs />
      {children}
    </Container>
  );
}
