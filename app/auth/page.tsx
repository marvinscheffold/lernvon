import { AuthPage } from "@/app/_features/auth/AuthPage";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return <AuthPage searchParams={searchParams} />;
}
