import { createClient } from "@supabase/supabase-js";
import { Database } from "../databaseTypes";

export const supabaseServerClient = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
