import { where } from 'firebase/firestore';
import { createContext, ReactNode } from 'react';
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

  return (
    <TasksContext.Provider value={tasks}>{children}</TasksContext.Provider>
  );
}

export { TasksContext, TasksContextProvider };
