"use server";

import { createSupabaseServerClient } from "@/app/_utils/supabase/createSupabaseServerClient";
import { redirect } from "next/navigation";

export async function authenticateWithGoogleAction(redirectTo?: string) {
  const supabase = createSupabaseServerClient();
  const { data } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: encodeURI(
        `${
          process.env.NODE_ENV! === "development"
            ? "http://localhost:3000"
            : "https://www.lernvon.de"
        }/auth/callback?redirect-to=${redirectTo || "/"}`
      ),
    },
  });

  if (data.url) {
    redirect(data.url);
  }
}
