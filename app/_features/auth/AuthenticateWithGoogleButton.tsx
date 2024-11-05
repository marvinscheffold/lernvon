"use client";

import { authenticateWithGoogleAction } from "@/app/_features/auth/actions";
import { Google } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useFormStatus } from "react-dom";

type AuthenticateWithGoogleButtonProps = {
  redirectTo?: string;
};

export function AuthenticateWithGoogleButton({
  redirectTo,
}: AuthenticateWithGoogleButtonProps) {
  return (
    <form action={() => authenticateWithGoogleAction(redirectTo)}>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <LoadingButton
      className="w-full"
      startIcon={<Google />}
      loadingPosition="end"
      variant="outlined"
      loading={pending}
      type="submit"
    >
      Mit Google fortfahren
    </LoadingButton>
  );
}
