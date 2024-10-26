import { Database } from "@/app/_utils/supabase/databaseTypes";

export type PoolType = Database["public"]["Tables"]["pool"]["Row"];
