import { ReactNode } from "react";

export function Section({ children }: { children: ReactNode }) {
  return <section className="py-14 flex flex-col gap-8">{children}</section>;
}

export function SectionRow({
  leftChildren,
  rightChildren,
}: {
  leftChildren: ReactNode;
  rightChildren: ReactNode;
}) {
  return (
    <div className="flex gap-4 md:gap-6 flex-col md:flex-row">
      <div className="flex-grow basis-0">{leftChildren}</div>
      <div className="flex-grow basis-0">{rightChildren}</div>
    </div>
  );
}
