import { NavLink, Outlet } from "react-router";
import { Container } from "../components/container";
import { Text } from "../components/text";
import { Header } from "../components/core/header";
import { Footer } from "../components/core/footer";

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
