import { TeacherType } from "@/app/_utils/types/teacher";

export const TEACHER_CREATE_ROUTE = "/dein-lehrerprofil";
export const TEACHER_CREATE_MANDATORY_INFORMATION_ROUTE =
  "/dein-lehrerprofil/pflichtangaben";
export const TEACHER_CREATE_VIDEO_ROUTE = "/dein-lehrerprofil/video";
export const TEACHER_CREATE_CONTACT_ROUTE = "/dein-lehrerprofil/kontakt";
export const TEACHER_CREATE_ABOUT_ROUTE = "/dein-lehrerprofil/ueber-dich";
export const TEACHER_CREATE_POOLS_ROUTE = "/dein-lehrerprofil/schwimmbaeder";
export const TEACHER_ROUTE = (teacherId: TeacherType["id"]) =>
  `/schwimmlehrer/${teacherId}`;
