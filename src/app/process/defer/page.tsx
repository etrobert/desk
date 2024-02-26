'use client';

import { useRouter } from 'next/navigation';

import TaskEdit from '../../../components/TaskEdit';

import useDeleteLatestCaptureItem from '../../../data/capture-items/useDeleteLatestCaptureItem';
import useAddTask from '../../../data/tasks/useAddTask';

import useLatestCaptureItem from '../../../data/capture-items/useLatestCaptureItem';

const Defer = () => {
  const router = useRouter();
  const { isLoading, latestCaptureItem } = useLatestCaptureItem();
  const deleteLatestCaptureItem = useDeleteLatestCaptureItem();
  const addTask = useAddTask();

  if (isLoading) return <>Loading...</>;
  // Layout should be redirecting...
  if (!latestCaptureItem) return <>No capture item found</>;

  return (
    <TaskEdit
      task={{ title: latestCaptureItem.value }}
      onSubmit={(task) => {
        addTask(task);
        deleteLatestCaptureItem();
        router.back();
      }}
    />
  );
};

export default Defer;
