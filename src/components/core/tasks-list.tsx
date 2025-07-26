import PlusIcon from "../../assets/icons/plus.svg?react";
import { useTask } from "../../hooks/useTask";
import { useTasks } from "../../hooks/useTasks";
import type { Task } from "../../models/task";
import { Button } from "../ui/button";
import { ButtonIcon } from "../ui/button-icon";
import { Text } from "../ui/text";
import { TaskItem } from "./task-item";

export function TasksList() {
  const { task, prepareTask } = useTask();
  const { tasks, isLoading } = useTasks();
  return (
    <>
      <section>
        <Button
          icon={PlusIcon}
          className="w-full"
          disabled={
            tasks.some((task) => task.state === "creating" && !task.title) ||
            isLoading
          }
          onClick={prepareTask}
        >
          Nova tarefa
        </Button>
      </section>
      <section className="space-y-2">
        {tasks.length === 0 && !isLoading ? (
          <Text
            as="p"
            variant="body-md-bold"
            className="text-gray-300 text-center my-10"
          >
            Nenhuma tarefa criada...
          </Text>
        ) : (
          !isLoading &&
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        )}
        {isLoading && <TaskItem task={{} as Task} loading />}
      </section>
    </>
  );
}
