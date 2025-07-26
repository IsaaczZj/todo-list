import { createContext, useEffect, useState, type ReactNode } from "react";
import type { User } from "../models/user";
interface AuthContext {
  session: User | null;
  isLoading: boolean;
  save: (data: User) => void;
  logout: (data: User) => void;
}

const AuthContext = createContext({} as AuthContext);
const LOCAL_STORAGE_KEY = "@todolist";

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  function save(data: User) {
    localStorage.setItem(
      `${LOCAL_STORAGE_KEY}:user`,
      JSON.stringify(data.user)
    );
    localStorage.setItem(`${LOCAL_STORAGE_KEY}:token`, data.token);

    setSession(data);
  }

  function logout() {
    setSession(null);
    localStorage.removeItem(`${LOCAL_STORAGE_KEY}:user`);
    localStorage.removeItem(`${LOCAL_STORAGE_KEY}:token`);
    window.location.assign("/");
  }

  function loadUser() {
    const user = localStorage.getItem(`${LOCAL_STORAGE_KEY}:user`);
    const token = localStorage.getItem(`${LOCAL_STORAGE_KEY}:token`);

    if (user && token) {
      setSession({ token, user: JSON.parse(user) });
    }
    setIsLoading(false);
  }

  useEffect(() => {
    loadUser();
  }, []);
  return (
    <AuthContext.Provider value={{ session, save, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
