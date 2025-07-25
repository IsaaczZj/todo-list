import { NavLink } from "react-router";
import { Text } from "../ui/text";

export function Footer() {
  return (
    <footer className="my-5 md:my-10">
      <nav className="flex items-center justify-center gap-4">
        <NavLink to="/">
          <Text variant="body-md-bold" className="text-gray-300">
            Home
          </Text>
        </NavLink>

        <NavLink to="/components">
          <Text variant="body-md-bold" className="text-gray-300">
            Componentes
          </Text>
        </NavLink>
      </nav>
    </footer>
  );
}
