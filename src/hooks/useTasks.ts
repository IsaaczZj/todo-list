import useLocalStorage from "use-local-storage";
import type { Task } from "../models/task";
import { useEffect, useState } from "react";
import { delay } from "../helpers/utils";

export function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>("tasks", []);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchTasks() {
    if (isLoading) {
      await delay(2000);
      setIsLoading(false);
    }
    setTasks(tasksData);
  }

  useEffect(() => {
    fetchTasks();
  }, [tasksData]);
  return {
    tasks,
    taskCount: tasks.filter((task) => task.state === "created").length,
    concludedtaskCount: tasks.filter((task) => task.concluded).length,
    isLoading
  };
}
