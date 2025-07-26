import { useTask } from "../../hooks/useTask";
import { useTasks } from "../../hooks/useTasks";
import { Badge } from "../ui/badge";
import { Text } from "../ui/text";

export function TasksSummary() {
  const { taskCount, concludedtaskCount } = useTasks();
  return (
    <section className="flex justify-between items-baseline">
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="text-gray-300">
          Tarefas criadas
        </Text>
        <Badge variant="secondary">{taskCount}</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="text-gray-300">
          Concluídas
        </Text>
        <Badge variant="primary">
          {concludedtaskCount} de {taskCount}
        </Badge>
      </div>
    </section>
  );
}
