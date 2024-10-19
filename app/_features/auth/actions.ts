"use server";

import { createSupabaseServerClient } from "@/app/_utils/supabase/createSupabaseServerClient";
import { redirect } from "next/navigation";

export async function authenticateWithGoogleAction(redirectTo?: string) {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: encodeURI(
        `http://localhost:3000/auth/callback?redirect-to=${redirectTo || "/"}`
      ),
    },
  });

  console.log({ data, error });

  if (data.url) {
    redirect(data.url);
  }
}

export async function signOutAction() {
  const supabase = createSupabaseServerClient();
  await supabase.auth.signOut();
  return redirect("/");
}
