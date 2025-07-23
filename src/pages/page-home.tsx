import { Container } from "../components/container";
import { TaskItem } from "../components/core/task-item";
import { TasksSummary } from "../components/core/tasks-summary";

export function PageHome() {
  return <Container className="space-y-3">
    <TasksSummary/>
    <TaskItem/>
  </Container>;
}
