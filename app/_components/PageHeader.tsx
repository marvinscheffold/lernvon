import { AuthUserAvatar } from "@/app/_features/auth/auth-user-avatar/AuthUserAvatar";
import {
  HOME_ROUTE,
  TEACHER_CREATE_ROUTE,
} from "@/app/_utils/constants/routes";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

export function PageHeader() {
  return (
    <header className="h-14 p-6 flex items-center justify-between border-b border-gray-200">
      <Link href={HOME_ROUTE}>
        <div className="flex gap-2 items-center">
          <Typography variant="h4">🏊‍♂️</Typography>
          <Typography variant="h6">lernvon</Typography>
        </div>
      </Link>
      <div className="flex gap-4 items-center">
        <Link href={TEACHER_CREATE_ROUTE} className="hidden sm:block">
          <Button variant="outlined" color="secondary">
            Schwimmlehrer werden
          </Button>
        </Link>
        <AuthUserAvatar />
      </div>
    </header>
  );
}
