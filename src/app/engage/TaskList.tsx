'use client';

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ButtonLink from '../../components/ButtonLink';
import TagList from '../../components/TagList';
import Button from '../../components/Button';
import useTasks from '../../data/tasks/useTasks';
import { TasksFiltersContext } from '../../data/tasks/TasksFiltersContext';

import type { Task } from '../../types';

import './TaskList.css';

type TaskListItemProps = {
  task: Task;
};

const TaskListItem = ({
  task: { id, title, tags, status },
}: TaskListItemProps) => (
  <li
    className={
      'TaskList__Task' + (status === 'done' ? ' TaskList__Task--Done' : '')
    }
    key={id}
  >
    <ButtonLink href={`engage/${id}`}>
      {title}
      {tags.length !== 0 && <TagList tags={tags} />}
    </ButtonLink>
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
      <Button onClick={toggleShowDoneTasks}>Show Done Tasks</Button>
      <ul className="TaskList">
        {tasks.map((task) => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
