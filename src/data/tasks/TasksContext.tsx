import { createContext, ReactNode, useMemo } from 'react';
import { Task } from '../../types';
import useUserCollection from '../useUserCollection';
import useQueryConstraints from './useQueryConstraints';

const TasksContext = createContext<Task[] | null>(null);

type Props = {
  children: ReactNode;
};

const path = ['tasks'];

function TasksContextProvider({ children }: Props) {
  const queryConstraints = useQueryConstraints();
  const tasks = useUserCollection<Task>(path, queryConstraints);

  const sortedTasks = useMemo(
    () =>
      tasks &&
      tasks.sort((a, b) =>
        a.createdAt === null || b.createdAt === null
          ? 0
          : a.createdAt.seconds - b.createdAt.seconds
      ),
    [tasks]
  );

  return (
    <TasksContext.Provider value={sortedTasks}>
      {children}
    </TasksContext.Provider>
  );
}

export { TasksContext, TasksContextProvider };
