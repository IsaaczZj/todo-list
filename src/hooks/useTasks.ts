import useLocalStorage from "use-local-storage";
import type { Task } from "../models/task";

export function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);

  function prepareTask() {
     setTasks([
      ...tasks,
      {
        id: Math.random().toString(32).substring(2, 9),
        title: "",
        concluded: false,
        state: "creating",
      },
    ]);
  }
  function deleteAllTask(){
    setTasks([])
  }
  

  return {
    tasks,
    tasksCount: tasks.length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
    prepareTask,
    deleteAllTask
  };
}
