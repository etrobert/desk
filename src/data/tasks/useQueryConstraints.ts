import { useContext, useMemo } from 'react';
import { where } from 'firebase/firestore';
import { TasksFiltersContext } from './TasksFiltersContext';

const useQueryConstraints = () => {
  const { showDoneTasks } = useContext(TasksFiltersContext);
  return useMemo(
    () => (showDoneTasks ? [] : [where('status', '!=', 'done')]),
    [showDoneTasks],
  );
};

export default useQueryConstraints;
