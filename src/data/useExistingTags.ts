import { useMemo } from 'react';
import useTasks from './tasks/useTasks';

export default function useExistingTags() {
  const tasks = useTasks();

  return useMemo(() => {
    if (tasks === null) return null;
    const allTags = tasks.flatMap((task) => task.tags);
    return [...new Set(allTags)];
  }, [tasks]);
}
