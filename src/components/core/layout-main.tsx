import { NavLink, Outlet } from "react-router";
import { Container } from "../ui/container";
import { Text } from "../ui/text";
import { Header } from "./header";
import { Footer } from "./footer";

export function LayoutMain() {
  return (
    <>
      <Header />
      <main className="mt-4 md:mt-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
