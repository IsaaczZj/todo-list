import useLocalStorage from "use-local-storage";
import type { Task } from "../models/task";

export function useTask() {
  const [task, setTask] = useLocalStorage<Task[]>("tasks", []);

  function prepareTask() {
    setTask([
      ...task,
      {
        id: Math.random().toString(32).substring(2, 9),
        title: "",
        concluded: false,
        state: "creating",
      },
    ]);
  }
  function deleteAllTask() {
    setTask([]);
  }
  function updateTask(id: string, title: string) {
    setTask(
      task.map((task) =>
        task.id === id ? { ...task, state: "created", title } : task
      )
    );
  }

  function updateStatusTask(id: string) {
    setTask(
      task.map((task) =>
        task.id === id ? { ...task, concluded: !task.concluded } : task
      )
    );
  }

  function deleteTask(id: string) {
    setTask(task.filter((task) => task.id !== id));
  }

  return {
    task,
    prepareTask,
    deleteAllTask,
    updateTask,
    updateStatusTask,
    deleteTask,
  };
}
