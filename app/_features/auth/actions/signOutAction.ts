"use server";

import { createSupabaseServerClient } from "@/app/_utils/supabase/createSupabaseServerClient";
import { redirect } from "next/navigation";

export async function signOutAction() {
  const supabase = createSupabaseServerClient();
  await supabase.auth.signOut();
  return redirect("/");
}
