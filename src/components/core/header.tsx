import { Container } from "../ui/container";
import Logo from "../../assets/images/logo.svg?react";
export function Header() {
  return (
    <Container className="mt-3 md:mt-20">
      <Logo className="h-10 md:h-12" />
    </Container>
  );
}
