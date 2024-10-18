import { Container } from "./Container";
import Link from "next/link";

export function PageFooter() {
  return (
    <footer className="border-t">
      <Container>
        <ul className="h-[116px] flex items-center gap-4">
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="https://www.phelb.com/de/privacy-policy">Privacy</Link>
          </li>
          <li>
            <Link href="https://www.phelb.com/de/imprint">Imprint</Link>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
