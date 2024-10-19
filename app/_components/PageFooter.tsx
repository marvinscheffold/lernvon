import { Container } from "@/app/_components/Container";
import { TEACHER_CREATE_ROUTE } from "@/app/_utils/constants/routes";
import { Typography } from "@mui/material";
import Link from "next/link";

export function PageFooter() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="h-32 flex items-center">
          <PageFooterContent />
        </div>
      </Container>
    </footer>
  );
}

export function PageFooterContent() {
  return (
    <div className="flex flex-wrap gap-6">
      <Typography variant="subtitle1">© Swimly 2024</Typography>
      <Link href={"/imprint"}>
        <Typography variant="subtitle1">Imprint</Typography>
      </Link>
      <Link href={"/privacy"}>
        <Typography variant="subtitle1">Privacy policy</Typography>
      </Link>
      <Link href={"/send"}>
        <Typography variant="subtitle1">Send feedback</Typography>
      </Link>
      <Link href={TEACHER_CREATE_ROUTE}>
        <Typography variant="subtitle1">Become a teacher</Typography>
      </Link>
    </div>
  );
}
