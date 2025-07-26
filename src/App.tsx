import { BrowserRouter, Route, Routes } from "react-router";
import { PageComponents } from "./pages/page-components";
import { LayoutMain } from "./components/core/layout-main";
import { PageHome } from "./pages/page-home";
import { AppRouter } from "./routes";

export function App() {
  return (
    <AppRouter/>
  );
}
