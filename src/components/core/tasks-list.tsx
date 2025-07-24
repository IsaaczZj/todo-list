import PlusIcon from "../../assets/icons/plus.svg?react";
import { useTask } from "../../hooks/useTask";
import { useTasks } from "../../hooks/useTasks";
import type { Task } from "../../models/task";
import { Button } from "../button";
import { ButtonIcon } from "../button-icon";
import { Text } from "../text";
import { TaskItem } from "./task-item";

export function TasksList() {
  const { task, prepareTask } = useTask();
  const { tasks } = useTasks();
  return (
    <>
      <section>
        <Button
          icon={PlusIcon}
          className="w-full"
          disabled={tasks.some(
            (task) => task.state === "creating" && !task.title
          )}
          onClick={prepareTask}
        >
          Nova tarefa
        </Button>
      </section>
      <section className="space-y-2">
        {tasks.length === 0 ? (
          <Text
            as="p"
            variant="body-md-bold"
            className="text-gray-300 text-center my-10"
          >
            Nenhuma tarefa criada...
          </Text>
        ) : (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </section>
    </>
  );
}
