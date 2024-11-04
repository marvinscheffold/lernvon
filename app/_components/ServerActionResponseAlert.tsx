import { ServerActionResponseType } from "@/app/_utils/serverActionResponseSchema";
import { Alert } from "@mui/material";

type ServerActionResponseAlertProps = {
  serverActionResponse?: ServerActionResponseType;
};

export function ServerActionResponseAlert({
  serverActionResponse,
}: ServerActionResponseAlertProps) {
  if (!serverActionResponse) return null;

  const { code, message } = serverActionResponse;
  if (code < 300) {
    return <Alert color="success">Änderungen erfolgreich gespeichert</Alert>;
  }

  if (code >= 300 && code < 400) {
    return <Alert color="warning">{JSON.stringify(message)}</Alert>;
  }

  return <Alert color="error">{JSON.stringify(message)}</Alert>;
}
