import { collection, orderBy, query } from 'firebase/firestore';
import { createContext, ReactNode } from 'react';
import useCollection from '../useCollection';
import { firestore } from '../../firebase';
import { Task } from '../../types';

const TasksContext = createContext<Task[] | null>(null);

type Props = {
  children: ReactNode;
};

const q = query(collection(firestore, 'tasks'), orderBy('createdAt', 'desc'));

function TasksContextProvider({ children }: Props) {
  const tasks = useCollection<Task>(q);

  return (
    <TasksContext.Provider value={tasks}>{children}</TasksContext.Provider>
  );
}

export { TasksContext, TasksContextProvider };
