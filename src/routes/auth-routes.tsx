import { Route, Routes } from "react-router";
import { LayoutMain } from "../components/core/layout-main";
import { AuthLayout } from "../components/core/auth-layout";
import { SignIn } from "../pages/sign-in";
import { SignUp } from "../pages/sing-up";

export function AuthRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route index path="/" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Route>
    </Routes>
  );
}
