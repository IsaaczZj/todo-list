import { Outlet } from "react-router";
import { Container } from "../ui/container";
import { Header } from "./header";

export function AuthLayout() {
  return (
    <Container className="flex flex-col mt-10 md:mt-20 gap-5 ">
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
