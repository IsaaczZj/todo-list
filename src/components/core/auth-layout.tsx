import { Outlet } from "react-router";
import { Container } from "../container";
import { Header } from "./header";

export function AuthLayout() {
  return (
    <Container className="flex flex-col mt-28 gap-5 ">
        <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
