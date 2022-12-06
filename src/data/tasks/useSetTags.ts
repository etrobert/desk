import { useCallback } from 'react';
import useTasks from './useTasks';
import useUpdateTask from './useUpdateTask';

const useSetTags = () => {
  const updateTask = useUpdateTask();
  const tasks = useTasks();

  return useCallback(() => {
    tasks?.forEach((task) => {
      updateTask({
        ...task,
        tags: [],
      });
    });
  }, [tasks, updateTask]);
};

export default useSetTags;
