import { createContext, ReactNode, useCallback, useState } from 'react';

type Data = {
  showDoneTasks: boolean;
  toggleShowDoneTasks: () => void;
};

const TasksFiltersContext = createContext<Data>({
  get showDoneTasks(): boolean {
    throw new Error('TasksFiltersContext not initialized');
  },
  get toggleShowDoneTasks(): never {
    throw new Error('TaskFiltersContext not initialized');
  },
});

type Props = {
  children: ReactNode;
};

function TasksFiltersContextProvider({ children }: Props) {
  const [showDoneTasks, setShowDoneTasks] = useState(true);

  const toggleShowDoneTasks = useCallback(
    () => setShowDoneTasks((value) => !value),
    []
  );

  return (
    <TasksFiltersContext.Provider
      value={{ showDoneTasks, toggleShowDoneTasks }}
    >
      {children}
    </TasksFiltersContext.Provider>
  );
}

export { TasksFiltersContext, TasksFiltersContextProvider };
