import { Database } from "@/app/_utils/supabase/databaseTypes";
import { PoolType } from "@/app/_utils/types/pool";

export type TeacherType = Database["public"]["Tables"]["teacher"]["Row"];

export type TeacherWithPoolsType = TeacherType & { pools: PoolType[] };
