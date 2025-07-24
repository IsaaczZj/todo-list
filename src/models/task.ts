export interface Task {
  id: string;
  title: string;
  concluded: boolean;
  state: "creating" | "created";
}
