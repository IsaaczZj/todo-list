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
export function TaskItem() {
  const [isEditing, setIsEditing] = useState(false);

  function handleExitEditTask() {
    setIsEditing(false);
  }

  return (
    <Card className="flex items-center gap-4">
      {!isEditing ? (
        <>
          <CheckBox />
          <Text className="flex-1">Fazendo compras</Text>

          <div className="flex items-center gap-1">
            <ButtonIcon variant="tertiary" icon={TrashIcon} />
            <ButtonIcon
              variant="tertiary"
              icon={PencilIcon}
              onClick={() => setIsEditing(true)}
            />
          </div>
        </>
      ) : (
        <>
          <Input className="flex-1" />
          <div className="flex items-center gap-1">
            <ButtonIcon
              variant="secondary"
              icon={XIcon}
              onClick={handleExitEditTask}
            />
            <ButtonIcon variant="primary" icon={CheckIcon} />
          </div>
        </>
      )}
    </Card>
  );
}
