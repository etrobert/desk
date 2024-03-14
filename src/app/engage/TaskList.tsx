import ButtonLink from '../../components/ButtonLink';

import fetchTasks from '@/db/fetchTasks';
import { redirect } from 'next/navigation';

import type { Task } from '@/db/schema';

type TaskListItemProps = {
  task: Task;
};

const TaskListItem = ({ task: { id, title } }: TaskListItemProps) => (
  <li className="grid" key={id}>
    <ButtonLink href={`engage/${id}`}>{title}</ButtonLink>
  </li>
);

const TaskList = async () => {
  const tasks = await fetchTasks();

  if (tasks.length === 0) redirect('/');

  return (
    <ul className="grid gap-2 overflow-auto pb-2">
      {tasks.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
