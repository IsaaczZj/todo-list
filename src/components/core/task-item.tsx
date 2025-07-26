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
import { Skeleton } from "../skeleton";

interface PropsTaskItem {
  task: Task;
  loading?: boolean;
}
export function TaskItem({ task, loading }: PropsTaskItem) {
  const [isEditing, setIsEditing] = useState(
    task?.state === "creating" || false
  );
  const [taskTitle, setTaskTitle] = useState(task?.title || "");
  const { updateTask, updateStatusTask, deleteTask } = useTask();

  if (loading || !task) {
    return (
      <Card>
        <div className="flex items-center gap-4">
          <Skeleton className="w-5 h-5 rounded" />
          <Skeleton className="flex-1 h-6" />
          <Skeleton className="w-6 h-6" />
          <Skeleton className="w-6 h-6" />
        </div>
      </Card>
    );
  }
  function handleExitEditTask() {
    if (task?.state === "creating") {
      deleteTask(task.id);
    }
    setIsEditing(false);
  }
  function handleSaveTask(e: React.FormEvent) {
    e.preventDefault();
    //chamada para funcao de atualizar ou api
    updateTask(task.id, taskTitle);
    setIsEditing(false);
  }

  return (
    <Card>
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <CheckBox
            checked={task.concluded}
            onClick={() => updateStatusTask(task.id)}
            loading={loading}
          />

          <Text
            className={`flex-1 ${
              task.concluded && "line-through text-gray-300"
            }`}
          >
            {task?.title}
          </Text>

          <div className="flex items-center gap-1">
            <ButtonIcon
              variant="tertiary"
              icon={TrashIcon}
              onClick={() => deleteTask(task.id)}
              loading={loading}
            />
            <ButtonIcon
              variant="tertiary"
              icon={PencilIcon}
              onClick={() => setIsEditing(true)}
              loading={loading}
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
