import { redirect } from 'next/navigation';
import Task from './Task';

const TaskPage = ({ params: { id } }: { params: { id: string } }) => {
  const intId = parseInt(id);
  if (isNaN(intId)) redirect('/');
  return <Task id={intId} />;
};

export default TaskPage;
