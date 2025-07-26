import { Route, Routes } from "react-router";
import { LayoutMain } from "../components/core/layout-main";
import { PageHome } from "../pages/page-home";
import { PageComponents } from "../pages/page-components";

export function UserRoutes() {
  return (
    <Routes>
      <Route element={<LayoutMain />}>
        <Route index element={<PageHome />} />
        <Route path="/components" element={<PageComponents />} />
      </Route>
    </Routes>
  );
}
