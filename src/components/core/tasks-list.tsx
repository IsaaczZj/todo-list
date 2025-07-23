import PlusIcon from "../../assets/icons/plus.svg?react";
import { Button } from "../button";
import { ButtonIcon } from "../button-icon";
import { TaskItem } from "./task-item";

export function TasksList() {
  return (
    <>
      <section >
        <Button icon={PlusIcon} className="w-full">Nova tarefa</Button>
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
