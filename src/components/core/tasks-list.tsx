import PlusIcon from "../../assets/icons/plus.svg?react";
import { useTask } from "../../hooks/useTasks";
import { Button } from "../button";
import { ButtonIcon } from "../button-icon";
import { TaskItem } from "./task-item";

export function TasksList() {
  const { tasks, prepareTask,deleteAllTask } = useTask();
  console.log(tasks);
  
  return (
    <>
      <section>
        <Button icon={PlusIcon} className="w-full" onClick={() => prepareTask()}>
          Nova tarefa
        </Button>
      </section>
      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  );
}
