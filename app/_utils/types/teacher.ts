import { Database } from "@/app/_utils/supabase/databaseTypes";

export type TeacherType = Database["public"]["Tables"]["teacher"]["Row"];
