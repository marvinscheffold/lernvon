import { headers } from "next/headers";
import { getBearerAccessTokenFromAuthorizationHeader } from "../../../_utils/server/getBearerAccessTokenFromAuthorizationHeader";
import { User } from "@supabase/supabase-js";
import { supabaseServerClient } from "../../../_utils/server/supabase";

export async function readAuthUserServerSide(): Promise<User | null> {
  const headersList = headers();
  const jwt = getBearerAccessTokenFromAuthorizationHeader(
    headersList.get("authorization")
  );

  if (!jwt) return null;

  const { data } = await supabaseServerClient.auth.getUser(jwt);

  return data.user;
}
