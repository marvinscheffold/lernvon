import { PageHeader } from "@/app/_components/PageHeader";
import { PageFooter } from "@/app/_components/PageFooter";
import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageHeader />
      <main>{children}</main>
      <PageFooter />
    </>
  );
}
