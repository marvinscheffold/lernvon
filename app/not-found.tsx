import { PageFooter } from "@/app/_components/PageFooter";
import { PageHeader } from "@/app/_components/PageHeader";
import { Result } from "@/app/_components/Result";
import { LANDING_PAGE_HOME_ROUTE } from "@/app/_utils/constants/routes";

export default function NotFound() {
  return (
    <>
      <PageHeader />
      <main>
        <Result
          tagline="404 - Seite nicht gefunden"
          title="Diese Seite existiert nicht"
          subTitle="Du kannst zur Startseite springen. Vielleicht findest du dort was du suchst."
          linkButton={{
            text: "Zur Startseite",
            href: LANDING_PAGE_HOME_ROUTE,
          }}
        />
      </main>
      <PageFooter />
    </>
  );
}
