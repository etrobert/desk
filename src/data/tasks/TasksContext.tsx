import { where } from 'firebase/firestore';
import { createContext, ReactNode, useMemo } from 'react';
import { Task } from '../../types';
import useUserCollection from '../useUserCollection';

const TasksContext = createContext<Task[] | null>(null);

type Props = {
  children: ReactNode;
};

const path = ['tasks'];
const queryConstraints = [where('status', '!=', 'done')];

function TasksContextProvider({ children }: Props) {
  const tasks = useUserCollection<Task>(path, queryConstraints);

  const sortedTasks = useMemo(
    () =>
      tasks && tasks.sort((a, b) => a.createdAt.seconds - b.createdAt.seconds),
    [tasks]
  );

  return (
    <TasksContext.Provider value={sortedTasks}>
      {children}
    </TasksContext.Provider>
  );
}

export { TasksContext, TasksContextProvider };
