"use client";

import { SubmitButton } from "@/app/_components/SubmitButton";
import { authenticateWithGoogleAction } from "@/app/_features/auth/actions/authenticateWithGoogleAction";
import { Google } from "@mui/icons-material";

type AuthenticateWithGoogleButtonProps = {
  redirectTo?: string;
};

export function AuthenticateWithGoogleButton({
  redirectTo,
}: AuthenticateWithGoogleButtonProps) {
  return (
    <form
      action={() =>
        authenticateWithGoogleAction({
          redirectTo: redirectTo,
          origin: window.location.origin,
        })
      }
    >
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
