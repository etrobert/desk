import tasks from '../mocks/tasks';

const useTask = (id: string | undefined) =>
  id === undefined ? undefined : tasks.find((task) => task.id === id);

export default useTask;
