import { BrowserRouter } from "react-router";
import { UserRoutes } from "./user-routes";
import { AdminRoutes } from "./admin-routes";
import { AuthRoutes } from "./auth-routes";

export function AppRouter() {
  const session = {
    user: {
      role: "",
    },
  };

  function Router() {
    switch (session.user.role) {
      case "user":
        return <UserRoutes />;
      case "admin":
        return <AdminRoutes />;
      default:
        return <AuthRoutes />;
    }
  }

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
