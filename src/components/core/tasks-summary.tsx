import { Badge } from "../badge";
import { Text } from "../text";

export function TasksSummary() {
  return (
    <header className="flex justify-between items-baseline">
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="text-gray-300">Tarefas criadas</Text>
        <Badge variant="secondary">5</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="text-gray-300">Concluídas</Text>
        <Badge variant="primary">2 de 5</Badge>
      </div>
    </header>
  );
}
