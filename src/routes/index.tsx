import { BrowserRouter } from "react-router";
import { UserRoutes } from "./user-routes";
import { AdminRoutes } from "./admin-routes";
import { AuthRoutes } from "./auth-routes";

const session = {
  user: {
    role: "user",
  },
};
const isLoading = false;

export function AppRouter() {
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

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
