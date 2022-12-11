import { useNavigate } from 'react-router-dom';

import TaskEdit from '../components/TaskEdit';

import useDeleteLatestCaptureItem from '../data/capture-items/useDeleteLatestCaptureItem';
import useAddTask from '../data/tasks/useAddTask';

import type { CaptureItem } from '../types';

type Props = {
  captureItem: CaptureItem;
};

const Defer = ({ captureItem }: Props) => {
  const navigate = useNavigate();
  const deleteLatestCaptureItem = useDeleteLatestCaptureItem();
  const addTask = useAddTask();

  return (
    <TaskEdit
      task={{ title: captureItem.value }}
      onSubmit={(task) => {
        addTask(task);
        deleteLatestCaptureItem();
        navigate(-1);
      }}
    />
  );
};

export default Defer;
