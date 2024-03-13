import { redirect } from 'next/navigation';

import TaskEdit from '../../../../components/TaskEdit';

import fetchTask from '@/db/fetchTask';

const TaskEditPage = ({ params: { id } }: { params: { id: string } }) => {
  const numId = parseInt(id);

  if (isNaN(numId)) redirect('/');

  const task = fetchTask(numId);

  return <TaskEdit task={task} />;
};

export default TaskEditPage;
