import useLocalStorage from "use-local-storage";
import type { Task } from "../models/task";

export function useTasks() {
  const [tasks] = useLocalStorage<Task[]>("tasks", []);
  return {
    tasks,
    taskCount: tasks.length,
    concludedtaskCount: tasks.filter((task) => task.concluded).length,
  };
}
