export interface User {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
    role: "user" | "admin";
  };
}
