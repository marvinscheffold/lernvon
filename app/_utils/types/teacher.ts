import { Tables } from "@/app/_utils/supabase/databaseTypes";
import { PoolType } from "@/app/_utils/types/pool";

export type TeacherType = Tables<"teacher">;

export type TeacherWithPoolsType = TeacherType & { pools: PoolType[] };
