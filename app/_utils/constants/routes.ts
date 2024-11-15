import { TeacherType } from "@/app/_utils/types/teacher";

export const LANDING_PAGE_HOME_ROUTE = "/";
export const TEACHER_CREATE_ROUTE = "/mein-lehrerprofil";
export const TEACHER_CREATE_MANDATORY_INFORMATION_ROUTE = `${TEACHER_CREATE_ROUTE}/pflichtangaben`;
export const TEACHER_CREATE_VIDEO_ROUTE = `${TEACHER_CREATE_ROUTE}/video`;
export const TEACHER_CREATE_CONTACT_ROUTE = `${TEACHER_CREATE_ROUTE}/kontakt`;
export const TEACHER_CREATE_POOLS_ROUTE = `${TEACHER_CREATE_ROUTE}/schwimmbaeder`;
export const SWIMMING_TEACHERS_ROUTE = "/schwimmlehrer";
export const SWIMMING_TEACHER_ROUTE = (teacherId: TeacherType["id"]) =>
  `/schwimmlehrer/${teacherId}`;
export const SWIMMING_TEACHERS_CITY_BERLIN_ROUTE = `${SWIMMING_TEACHERS_ROUTE}/stadt/berlin`;
export const SWIMMING_TEACHERS_CITY_BERLIN_DISTRICTS_ROUTE = `${SWIMMING_TEACHERS_CITY_BERLIN_ROUTE}/bezirk`;
export const SWIMMING_TEACHERS_CITY_BERLIN_POOLS_ROUTE = `${SWIMMING_TEACHERS_CITY_BERLIN_ROUTE}/schwimmbad`;
export const AUTH_ROUTE = "/auth";
export const IMPRINT_ROUTE = "/impressum";
export const PRIVACY_ROUTE = "/datenschutz";
