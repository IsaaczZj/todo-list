import { Route, Routes } from "react-router";
import { LayoutMain } from "../components/core/layout-main";

export function AdminRoutes() {
  return (
    <Routes>
      <Route element={<LayoutMain />}>
        <Route index element={<h1>Admin routes</h1>} />
      </Route>
    </Routes>
  );
}
