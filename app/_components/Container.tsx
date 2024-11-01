import { ReactNode } from "react";

export function Container({
  children,
  hasPadding = true,
}: {
  children: ReactNode;
  hasPadding?: boolean;
}) {
  return (
    <div className="w-full flex justify-center">
      <div className={`w-full max-w-7xl ${hasPadding ? "px-6" : ""}`}>
        {children}
      </div>
    </div>
  );
}
