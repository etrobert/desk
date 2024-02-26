'use client';

import { useRouter } from 'next/navigation';

import TaskEdit from '../../../../components/TaskEdit';

import useTask from '../../../../data/tasks/useTask';
import useUpdateTask from '../../../../data/tasks/useUpdateTask';

const TaskEditPage = ({ params: { id } }: { params: { id: string } }) => {
  const task = useTask(id);
  const updateTask = useUpdateTask();
  const router = useRouter();

  if (task === undefined) {
    router.push('/');
    return null;
  }
  if (task === null) return <>Loading...</>;

  return (
    <TaskEdit
      task={task}
      onSubmit={(task) => {
        updateTask(task);
        router.back();
      }}
    />
  );
};

export default TaskEditPage;
