import { ButtonIcon } from "../button-icon";
import { Card } from "../card";
import { CheckBox } from "../checkbox";
import { Text } from "../text";
import TrashIcon from "../../assets/icons/trash.svg?react";
import PencilIcon from "../../assets/icons/pencil.svg?react";

import CheckIcon from "../../assets/icons/check.svg?react";

import XIcon from "../../assets/icons/x.svg?react";
import { useState } from "react";
import { Input } from "../input";
import type { Task } from "../../models/task";
import { useTask } from "../../hooks/useTask";

interface PropsTaskItem {
  task: Task;
}
export function TaskItem({ task }: PropsTaskItem) {
  const [isEditing, setIsEditing] = useState(task?.state === "creating");
  const [taskTitle, setTaskTitle] = useState(task?.title || "");
  const { updateTask, updateStatusTask } = useTask();
  console.log(task.state);

  function handleExitEditTask() {
    if (taskTitle.trim().length === 0) {
      return alert("A tarefa não pode estar vazia");
    }
    setIsEditing(false);
  }
  function handleSaveTask(e: React.FormEvent) {
    e.preventDefault();
    //chamada para funcao de atualizar ou api
    updateTask(task.id, taskTitle);
    setIsEditing(false);
  }
  function handleCheckTask() {}

  return (
    <Card>
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <CheckBox
            value={task.concluded.toString()}
            checked={task.concluded}
            onClick={() => updateStatusTask(task.id)}
          />
          <Text className={`flex-1 ${task.concluded && "line-through text-gray-300"}`}>
            {task?.title}
          </Text>

          <div className="flex items-center gap-1">
            <ButtonIcon variant="tertiary" icon={TrashIcon} />
            <ButtonIcon
              variant="tertiary"
              icon={PencilIcon}
              onClick={() => setIsEditing(true)}
            />
          </div>
        </div>
      ) : (
        <>
          <form onSubmit={handleSaveTask} className="flex items-center gap-4">
            <Input
              className="flex-1"
              onChange={({ target }) => setTaskTitle(target.value)}
              value={taskTitle}
              required
              autoFocus
            />
            <div className="flex items-center gap-1">
              <ButtonIcon
                variant="secondary"
                icon={XIcon}
                onClick={handleExitEditTask}
                type="button"
              />
              <ButtonIcon variant="primary" icon={CheckIcon} type="submit" />
            </div>
          </form>
        </>
      )}
    </Card>
  );
}
