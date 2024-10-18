import { Button } from "antd";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { ReactNode } from "react";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
import { LoginLogoutButton } from "../_features/auth/LoginLogoutButton";

type PageHeaderProps = {
  centerChild?: ReactNode;
};

export function PageHeader({ centerChild }: PageHeaderProps) {
  return (
    <header className="relative">
      <Container>
        <div className="h-[72px] flex items-center justify-between">
          <Link href={"/"}>
            <Logo />
          </Link>
          {centerChild && (
            <div className="absolute left-1/2 -translate-x-1/2">
              {centerChild}
            </div>
          )}
          <LoginLogoutButton />
        </div>
      </Container>
    </header>
  );
}
