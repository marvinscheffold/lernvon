"use client";

import { Button, Divider, Input, Result } from "antd";
import InputPassword from "antd/lib/input/Password";
import { PageFooter } from "../../_components/PageFooter";
import { PageHeader } from "../../_components/PageHeader";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { supabaseBrowserClient } from "../../_utils/client/supabase";

export function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      supabaseBrowserClient.auth.signUp({
        email,
        password,
      }),
  });

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsSubmitted(true);
    if (!email || !password || !passwordRepeat) return;
    if (password !== passwordRepeat) return;

    mutation.mutate(
      { password, email },
      {
        onSuccess: () => {
          console.log("success");
        },
        onError: (error) => {
          console.log(error);
          console.log("error");
        },
      }
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <PageHeader />
      <main className="flex-grow flex items-center justify-center">
        {mutation.isSuccess ? (
          <Result
            status="success"
            title="Please confirm your email"
            subTitle="Please click on the link in your email to confirm your registration"
            extra={
              <Link href={"./"}>
                <Button type="primary">Go to Homepage</Button>
              </Link>
            }
          />
        ) : (
          <form
            className="w-[400px] h-auto p-8 rounded-xl border"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl text-center mb-6">Sign up</h1>
            <div className="mb-4">
              <Input
                placeholder="Email"
                className="mb-4"
                size="large"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                status={isSubmitted && email.length === 0 ? "error" : undefined}
              />
            </div>
            <div className="mb-4">
              <InputPassword
                placeholder="New Password"
                size="large"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                status={
                  isSubmitted && password.length === 0 ? "error" : undefined
                }
              />
            </div>
            <div className="mb-4">
              <InputPassword
                placeholder="Repeat Password"
                size="large"
                type="password"
                onChange={(event) => setPasswordRepeat(event.target.value)}
                status={
                  isSubmitted && passwordRepeat.length === 0
                    ? "error"
                    : undefined
                }
              />
            </div>
            <Button
              size="large"
              type="primary"
              className="w-full"
              loading={mutation.isPending}
              htmlType="submit"
            >
              Sign up
            </Button>
            <Divider>Or</Divider>
            <Link href={"/login"}>
              <Button size="large" className="w-full">
                Log in
              </Button>
            </Link>
          </form>
        )}
      </main>
      <PageFooter />
    </div>
  );
}
