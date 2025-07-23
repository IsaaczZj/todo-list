import TrashIcon from "../assets/icons/trash.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import { Text } from "../components/text";
import { Icon } from "../components/icon";
import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { ButtonIcon } from "../components/button-icon";
import { Input } from "../components/input";
import { CheckBox } from "../components/checkbox";
import { Card } from "../components/card";
import { Container } from "../components/container";
import { Skeleton } from "../components/skeleton";
export function PageComponents(){
  return (
    <Container>
      <div className="grid gap-10">
        <div className="flex flex-col gap-2">
          <Text variant="body-sm-bold">Class</Text>
          <Text>Class</Text>
          <Text variant="body-md-bold">Class</Text>
        </div>
        <div className="flex gap-1">
          <Text as="h1">Ícones</Text>
          <Icon svg={TrashIcon} className="fill-pink-base" />
          <Icon svg={CheckIcon} className="fill-pink-dark" />
          <Icon svg={PencilIcon} className="fill-green-base" />
          <Icon svg={PlusIcon} className="fill-green-base" />
          <Icon svg={SpinnerIcon} animate className="fill-green-base" />
          <Icon svg={XIcon} className="fill-green-base" />
        </div>
        <div className="space-x-2 ">
          <Badge variant={"secondary"}>2 </Badge>
          <Badge variant={"primary"}>2 de 5</Badge>
          <Badge variant={"primary"} loading>
            5
          </Badge>
        </div>
        <div>
          <Button icon={PlusIcon}>Nova tarefa</Button>
          <ButtonIcon icon={TrashIcon} variant="secondary">
            Nova tarefa
          </ButtonIcon>
          <ButtonIcon icon={TrashIcon} variant="primary">
            Nova tarefa
          </ButtonIcon>
          <ButtonIcon icon={TrashIcon} variant="tertiary">
            Nova tarefa
          </ButtonIcon>
          <ButtonIcon icon={TrashIcon} variant="tertiary" loading />
        </div>
        <div>
          <CheckBox />
          <CheckBox loading />
        </div>
        <div>
          <Card>
            <CheckBox />

            <Input />
            <ButtonIcon variant="tertiary" icon={TrashIcon} />
            <ButtonIcon variant="tertiary" icon={PencilIcon} />
          </Card>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="w-96 h-6" />
        </div>
      </div>
    </Container>
  );
}