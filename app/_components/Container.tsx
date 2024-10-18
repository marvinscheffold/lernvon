import { ReactNode } from "react";

type ContainerProps = {
  children?: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl px-6 md:px-12">{children}</div>
    </div>
  );
}
