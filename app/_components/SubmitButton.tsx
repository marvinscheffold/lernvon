"use client";

import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = Omit<LoadingButtonProps, "loading" | "type">;

export function SubmitButton(props: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <LoadingButton {...props} loading={pending} type="submit">
      {props.children}
    </LoadingButton>
  );
}
