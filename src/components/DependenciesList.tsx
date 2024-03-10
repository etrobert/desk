import { useMemo } from 'react';
import useTasks from '@/data/tasks/useTasks';
import { Button } from '@/components/ui/button';

type Props = {
  dependencies: string[];
  onDependencyClick?: (id: string) => void;
};

// TODO: This has terrible performance.
const useTasksById = (ids: string[]) => {
  const tasks = useTasks();

  return useMemo(
    () => tasks && tasks.filter((task) => ids.some((id) => id === task.id)),
    [tasks, ids],
  );
};

const DependenciesList = ({ dependencies, onDependencyClick }: Props) => {
  const dependenciesTasks = useTasksById(dependencies);

  if (dependenciesTasks === null) return <>Loading...</>;

  return (
    <ul className="flex gap-4 overflow-auto">
      {dependenciesTasks.map((task) => (
        <li key={task.id}>
          <Button
            variant="outline"
            onClick={onDependencyClick && (() => onDependencyClick(task.id))}
          >
            {task.title}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default DependenciesList;
