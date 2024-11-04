import { PageFooterContent } from "@/app/_components/PageFooter";
import { AuthenticateWithGoogleButton } from "@/app/_features/auth/AuthenticateWithGoogleButton";
import { Typography } from "@mui/material";

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
        <PageFooterContent />
      </div>
    </div>
  );
}
