import { AuthenticateWithGoogleButton } from "@/app/_features/auth/AuthenticateWithGoogleButton";
import { TEACHER_CREATE_ROUTE } from "@/app/_utils/constants/routes";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col gap-8 w-full max-w-md p-6">
        <Typography variant="h4">Anmelden oder Registrieren</Typography>
        <div className="flex flex-col gap-4">
          <AuthenticateWithGoogleButton
            redirectTo={
              Array.isArray(searchParams["redirect-to"])
                ? searchParams["redirect-to"][0]
                : searchParams["redirect-to"]
            }
          />
        </div>
        <div className="flex flex-wrap gap-6">
          <Typography variant="subtitle1">
            © lernvon {new Date().getFullYear()}
          </Typography>
          <Link href={"/impressum"}>
            <Typography variant="subtitle1">Impressum</Typography>
          </Link>
          <Link href={"/datenschutz"}>
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
    </div>
  );
}
