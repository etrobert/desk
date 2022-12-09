import { createContext, ReactNode, useState } from 'react';

type Data = {
  showDoneTasks: boolean;
  setShowDoneTasks: React.Dispatch<React.SetStateAction<boolean>>;
};

const TasksFiltersContext = createContext<Data>({
  get showDoneTasks(): boolean {
    throw new Error('TasksFiltersContext not initialized');
  },
  get setShowDoneTasks(): React.Dispatch<React.SetStateAction<boolean>> {
    throw new Error('TasksFiltersContext not initialized');
  },
});

type Props = {
  children: ReactNode;
};

function TasksFiltersContextProvider({ children }: Props) {
  const [showDoneTasks, setShowDoneTasks] = useState(true);

  return (
    <TasksFiltersContext.Provider value={{ showDoneTasks, setShowDoneTasks }}>
      {children}
    </TasksFiltersContext.Provider>
  );
}

export { TasksFiltersContext, TasksFiltersContextProvider };
