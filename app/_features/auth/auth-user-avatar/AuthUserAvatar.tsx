import { AuthUserAvatarClient } from "@/app/_features/auth/auth-user-avatar/AuthUserAvatarClient";
import { createSupabaseServerClient } from "@/app/_utils/supabase/createSupabaseServerClient";

export async function AuthUserAvatar() {
  const supabase = createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <AuthUserAvatarClient user={user || null} />;
}
