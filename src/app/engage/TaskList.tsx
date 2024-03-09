'use client';

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ButtonLink from '../../components/ButtonLink';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import useTasks from '../../data/tasks/useTasks';
import { TasksFiltersContext } from '../../data/tasks/TasksFiltersContext';

import type { Task } from '../../types';

import './TaskList.css';

type TaskListItemProps = {
  task: Task;
};

const TaskListItem = ({ task: { id, title, status } }: TaskListItemProps) => (
  <li
    className={cn(
      'TaskList__Task',
      status === 'done' && ' TaskList__Task--Done',
    )}
    key={id}
  >
    <ButtonLink href={`engage/${id}`}>{title}</ButtonLink>
  </li>
);

const TaskList = () => {
  const tasks = useTasks();
  const router = useRouter();

  const { toggleShowDoneTasks } = useContext(TasksFiltersContext);

  useEffect(() => {
    if (tasks?.length === 0) router.push('/');
  }, [router, tasks]);

  if (tasks === null) return <>Loading...</>;
  return (
    <>
      <Button variant="outline" onClick={toggleShowDoneTasks}>
        Show Done Tasks
      </Button>
      <ul className="TaskList">
        {tasks.map((task) => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
