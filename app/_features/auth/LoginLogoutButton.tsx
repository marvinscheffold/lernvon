"use client";
import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "antd";
import Link from "next/link";
import { authQueries } from "./authQueries";
import { supabaseBrowserClient } from "../../_utils/client/supabase";
import { checkoutQueries } from "../checkout/client/checkoutQueries";

export function LoginLogoutButton() {
  const queryClient = useQueryClient();
  const { data: session } = useQuery(authQueries.session());

  const signOutMutation = useMutation({
    mutationFn: () => supabaseBrowserClient.auth.signOut(),
  });

  useEffect(() => {
    const { data } = supabaseBrowserClient.auth.onAuthStateChange((event) => {
      queryClient.invalidateQueries({ queryKey: authQueries.all() });
      queryClient.invalidateQueries({ queryKey: checkoutQueries.all() });
    });

    return data.subscription.unsubscribe;
  }, [queryClient]);

  if (session) {
    return (
      <Button
        onClick={() => signOutMutation.mutate()}
        loading={signOutMutation.isPending}
      >
        Log out
      </Button>
    );
  }

  if (session === null) {
    return (
      <Link href={"/login"}>
        <Button>Log in</Button>
      </Link>
    );
  }

  return <Button disabled>Log in</Button>;
}
