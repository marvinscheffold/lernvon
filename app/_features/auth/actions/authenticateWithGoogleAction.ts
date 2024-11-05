"use server";

import { createSupabaseServerClient } from "@/app/_utils/supabase/createSupabaseServerClient";
import { redirect } from "next/navigation";

export async function authenticateWithGoogleAction({
  redirectTo,
  origin,
}: {
  redirectTo?: string;
  origin: string;
}) {
  const supabase = createSupabaseServerClient();
  const { data } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: encodeURI(
        `${origin}/auth/callback?redirect-to=${redirectTo || "/"}`
      ),
    },
  });

  if (data.url) {
    redirect(data.url);
  }
}
