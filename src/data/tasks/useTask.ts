import useTasks from './useTasks';

const useTask = (id: string | undefined) => {
  const tasks = useTasks();
  if (id === undefined) return undefined;
  if (tasks === null) return null;
  return tasks.find((task) => task.id === id);
};

export default useTask;
