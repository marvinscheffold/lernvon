"use client";

import { SubmitButton } from "@/app/_components/SubmitButton";
import { authenticateWithGoogleAction } from "@/app/_features/auth/actions";
import { Google } from "@mui/icons-material";

type AuthenticateWithGoogleButtonProps = {
  redirectTo?: string;
};

export function AuthenticateWithGoogleButton({
  redirectTo,
}: AuthenticateWithGoogleButtonProps) {
  return (
    <form action={() => authenticateWithGoogleAction(redirectTo)}>
      <SubmitButton
        className="w-full"
        startIcon={<Google />}
        loadingPosition="end"
        variant="outlined"
      >
        Mit Google fortfahren
      </SubmitButton>
    </form>
  );
}
