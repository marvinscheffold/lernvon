import { TeacherType } from "@/app/_utils/types/teacher";

export const LANDING_PAGE_HOME_ROUTE = "/";
export const TEACHER_CREATE_ROUTE = "/mein-lehrerprofil";
export const TEACHER_CREATE_MANDATORY_INFORMATION_ROUTE =
  "/mein-lehrerprofil/pflichtangaben";
export const TEACHER_CREATE_VIDEO_ROUTE = "/mein-lehrerprofil/video";
export const TEACHER_CREATE_CONTACT_ROUTE = "/mein-lehrerprofil/kontakt";
export const TEACHER_CREATE_POOLS_ROUTE = "/mein-lehrerprofil/schwimmbaeder";
export const TEACHERS_ROUTE = "/schwimmlehrer";
export const TEACHER_ROUTE = (teacherId: TeacherType["id"]) =>
  `/schwimmlehrer/${teacherId}`;
export const AUTH_ROUTE = "/auth";
