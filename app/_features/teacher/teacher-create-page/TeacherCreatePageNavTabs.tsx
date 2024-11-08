"use client";

import {
  TEACHER_CREATE_CONTACT_ROUTE,
  TEACHER_CREATE_MANDATORY_INFORMATION_ROUTE,
  TEACHER_CREATE_POOLS_ROUTE,
  TEACHER_CREATE_ROUTE,
  TEACHER_CREATE_VIDEO_ROUTE,
} from "@/app/_utils/constants/routes";
import { Tab, Tabs } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function TeacherCreatePageNavTabs() {
  const pathname = usePathname();
  let activeTab = 0;
  if (pathname === TEACHER_CREATE_MANDATORY_INFORMATION_ROUTE) activeTab = 1;
  if (pathname === TEACHER_CREATE_VIDEO_ROUTE) activeTab = 2;
  if (pathname === TEACHER_CREATE_CONTACT_ROUTE) activeTab = 3;
  if (pathname === TEACHER_CREATE_POOLS_ROUTE) activeTab = 4;

  return (
    <Tabs
      value={activeTab}
      variant="scrollable"
      className="border-b border-neutral-100"
      scrollButtons="auto"
      allowScrollButtonsMobile
    >
      <Link href={TEACHER_CREATE_ROUTE}>
        <Tab label="Übersicht" />
      </Link>
      <Link href={TEACHER_CREATE_MANDATORY_INFORMATION_ROUTE}>
        <Tab label="Pflichtangaben*" />
      </Link>
      <Link href={TEACHER_CREATE_VIDEO_ROUTE}>
        <Tab label="Video" />
      </Link>
      <Link href={TEACHER_CREATE_CONTACT_ROUTE}>
        <Tab label="Kontaktmöglichkeiten" />
      </Link>
      <Link href={TEACHER_CREATE_POOLS_ROUTE}>
        <Tab label="Schwimmbäder" />
      </Link>
    </Tabs>
  );
}
