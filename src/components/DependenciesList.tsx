import useTasks from '@/data/tasks/useTasks';
import TagList from './TagList';
import { useMemo } from 'react';

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

  // TODO: Change from using _task_list for dependencies
  return (
    <TagList
      tags={dependenciesTasks.map((d) => d.title)}
      onTagClick={onDependencyClick}
    />
  );
};

export default DependenciesList;
