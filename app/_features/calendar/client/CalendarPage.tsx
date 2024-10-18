"use client";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { Container } from "../../../_components/Container";
import { PageFooter } from "../../../_components/PageFooter";
import { Logo } from "../../../_components/Logo";
import { LoginLogoutButton } from "../../auth/LoginLogoutButton";
import { CalendarList } from "./calendar-list/CalendarList";
import { CalendarDateModalProvider } from "./CalendarContext";
import { CalendarSearchBarSmall } from "./calendar-search-bar/CalendarSearchBarSmall";
import { CalendarGrid } from "./calendar-grid/CalendarGrid";
import { useState } from "react";
import dayjs from "dayjs";
import { CalendarUpsaleOverlay } from "./CalendarUpsaleOverlay";
import { CalendarUpsaleInlay } from "./CalendarUpsaleInlay";
import { useQuery } from "@tanstack/react-query";
import { checkoutQueries } from "../../checkout/client/checkoutQueries";

export function CalendarPage() {
  const { data: subcription } = useQuery(checkoutQueries.subscription());
  const searchParams = useSearchParams();
  const minimumPriceParam = searchParams.get("p");
  const minimumPrice = minimumPriceParam ? parseInt(minimumPriceParam) : null;
  const { city } = useParams<{ city: string }>();
  const [visibleDate, setVisibleDate] = useState(dayjs());
  const isUpsaleOverlayVisible = subcription
    ? false
    : visibleDate.isAfter(dayjs().add(30, "day"));
  const isUpsaleOverlayFullHeight = subcription
    ? false
    : visibleDate.isAfter(dayjs().add(60, "day"));
  return (
    <CalendarDateModalProvider>
      <header className="relative">
        <Container>
          <div className="flex md:hidden items-center flex-col justify-center">
            <div className="h-[72px] w-full flex justify-between items-center">
              <Link href={"/"}>
                <Logo />
              </Link>
              <LoginLogoutButton />
            </div>
            <div className="pb-2">
              <CalendarSearchBarSmall
                city={city}
                minimumPrice={minimumPrice}
                onClick={() => {}}
              />
            </div>
          </div>
          <div className="hidden md:flex h-[72px] items-center justify-between">
            <Link href={"/"}>
              <Logo />
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2">
              <CalendarSearchBarSmall
                city={city}
                minimumPrice={minimumPrice}
                onClick={() => {}}
              />
            </div>
            <LoginLogoutButton />
          </div>
        </Container>
      </header>
      <main>
        <Container>
          <div className="hidden lg:block">
            <CalendarGrid
              city={city}
              minimumPrice={minimumPrice}
              visibleDate={visibleDate}
              setVisibleDate={setVisibleDate}
            />
          </div>
          <div className="block lg:hidden">
            <CalendarList
              city={city}
              minimumPrice={minimumPrice}
              visibleDate={visibleDate}
              setVisibleDate={setVisibleDate}
            />
          </div>
        </Container>
      </main>
      <PageFooter />
      <CalendarUpsaleOverlay
        isFullContainerHeight={isUpsaleOverlayFullHeight}
        isVisible={isUpsaleOverlayVisible}
      >
        <CalendarUpsaleInlay kind="month" minimumPrice={minimumPrice} />
      </CalendarUpsaleOverlay>
    </CalendarDateModalProvider>
  );
}
