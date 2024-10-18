import { ReactNode } from "react";
import { Container } from "../../../_components/Container";

type CalendarUpsaleOverlayProps = {
  isVisible: boolean;
  isFullContainerHeight: boolean;
  children: ReactNode;
};

export function CalendarUpsaleOverlay({
  isVisible,
  isFullContainerHeight,
  children,
}: CalendarUpsaleOverlayProps) {
  return (
    <div
      className={`${isFullContainerHeight ? "h-full" : "h-1/2"} ${
        !isVisible && "translate-y-full"
      } bg-white/90 fixed bottom-0 left-0 right-0 flex items-center duration-150`}
    >
      <div className="w-full">
        <Container>{children}</Container>
      </div>
    </div>
  );
}
