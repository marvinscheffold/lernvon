import { Session, User } from "@supabase/supabase-js";
import { supabaseBrowserClient } from "../../_utils/client/supabase";

export async function readAuthUser(): Promise<User | null> {
  const { data, error } = await supabaseBrowserClient.auth.getUser();
  if (error) throw error;
  return data.user;
}

export async function readSession(): Promise<Session | null> {
  const { data, error } = await supabaseBrowserClient.auth.getSession();
  if (error) throw error;
  return data.session;
}
