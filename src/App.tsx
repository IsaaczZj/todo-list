import { Text } from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import XIcon from "./assets/icons/x.svg?react";
import { Icon } from "./components/icon";
import { Badge } from "./components/badge";
import { Button } from "./components/button";

export function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-2">
        <Text variant="body-sm-bold">Class</Text>
        <Text>Class</Text>
        <Text variant="body-md-bold">Class</Text>
      </div>
      <div className="flex gap-1">
        <Text as="h1">Ícones</Text>
        <Icon svg={TrashIcon} className="fill-green-base" />
        <Icon svg={CheckIcon} className="fill-green-base" />
        <Icon svg={PencilIcon} className="fill-green-base" />
        <Icon svg={PlusIcon} className="fill-green-base" />
        <Icon svg={SpinnerIcon} animate className="fill-green-base" />
        <Icon svg={XIcon} className="fill-green-base" />
      </div>
      <div>
        <Badge variant={"secondary"}>2 </Badge>
        <Badge variant={"primary"}>2 de 5</Badge>
      </div>
      <div>
        <Button icon={PlusIcon}>Nova tarefa</Button>
      </div>
    </div>
  );
}
