import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl px-6">{children}</div>
    </div>
  );
}
