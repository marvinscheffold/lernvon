import { Container } from "@/app/_components/Container";
import { TEACHER_CREATE_ROUTE } from "@/app/_utils/constants/routes";
import { Typography } from "@mui/material";
import Link from "next/link";

export function PageFooter() {
  return (
    <footer className="py-16 border-t border-neutral-100">
      <Container>
        <div className="flex items-center">
          <PageFooterContent />
        </div>
      </Container>
    </footer>
  );
}

export function PageFooterContent() {
  return (
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
  );
}
