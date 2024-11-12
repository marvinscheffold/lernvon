import { AuthenticateWithGoogleButton } from "@/app/_features/auth/AuthenticateWithGoogleButton";
import {
  IMPRINT_ROUTE,
  PRIVACY_ROUTE,
  TEACHER_CREATE_ROUTE,
} from "@/app/_utils/constants/routes";
import { Typography } from "@mui/material";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anmelden oder registrieren | lernvon",
  description:
    "Melde dich an oder registriere dich, um Schwimmlehrer zu werden.",
  robots: "noindex, nofollow",
};

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
          <Link href={IMPRINT_ROUTE}>
            <Typography variant="subtitle1">Impressum</Typography>
          </Link>
          <Link href={PRIVACY_ROUTE}>
            <Typography variant="subtitle1">Datenschutz</Typography>
          </Link>
          <Link href={"mailto:info@lernvon.de"}>
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
