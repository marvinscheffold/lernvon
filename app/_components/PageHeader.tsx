import { AuthUserAvatar } from "@/app/_features/auth/auth-user-avatar/AuthUserAvatar";
import {
  LANDING_PAGE_HOME_ROUTE,
  SWIMMING_TEACHERS_CITY_BERLIN_ROUTE,
} from "@/app/_utils/constants/routes";
import { Typography } from "@mui/material";
import Link from "next/link";
import iconImage from "@/public/images/icon.png";
import Image from "next/image";

export function PageHeader() {
  return (
    <header className="h-14 px-6 pr-5 flex items-center justify-between border-b border-neutral-100">
      <div className="flex gap-4 items-center">
        <Link href={LANDING_PAGE_HOME_ROUTE}>
          <div className="flex gap-2 items-center">
            <Image alt="lernvon icon" src={iconImage} width={32} height={32} />
            <Typography variant="h6">lernvon</Typography>
          </div>
        </Link>
        <Link
          href={SWIMMING_TEACHERS_CITY_BERLIN_ROUTE}
          className="hidden sm:block"
        >
          <Typography variant="subtitle1">Schwimmlehrer in Berlin</Typography>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <AuthUserAvatar />
      </div>
    </header>
  );
}
