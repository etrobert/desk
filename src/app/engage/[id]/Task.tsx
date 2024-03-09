'use client';

import { useRouter } from 'next/navigation';
import BackButton from '../../../components/BackButton';
import { Button } from '@/components/ui/button';
import ButtonLink from '../../../components/ButtonLink';
import ButtonGroup from '../../../components/ButtonGroup';
import TagList from '../../../components/TagList';

import useUpdateTask from '../../../data/tasks/useUpdateTask';
import useDeleteTask from '../../../data/tasks/useDeleteTask';
import useTask from '../../../data/tasks/useTask';

import './Task.css';

type Props = {
  id: string;
};

const Tags = ({ tags }: { tags: string[] }) => {
  if (tags.length === 0) return null;
  return (
    <>
      <label>Tags:</label>
      <TagList tags={tags} />
    </>
  );
};

const Dependencies = ({ dependencies }: { dependencies?: string[] }) => {
  if (dependencies === undefined || dependencies.length === 0) return null;
  return (
    <>
      <label>Dependencies:</label>
      <TagList tags={dependencies} />
    </>
  );
};

const Task = ({ id }: Props) => {
  const task = useTask(id);
  const updateTask = useUpdateTask();
  const deleteTask = useDeleteTask();
  const router = useRouter();

  if (task === undefined) {
    router.push('..');
    return null;
  }
  if (task === null) return <>Loading...</>;

  const { title, tags, dependencies } = task;

  return (
    <>
      <div className="Task__content">
        <p className="Task__title">{title}</p>
        <div className="Task__fields">
          <Tags tags={tags} />
          <Dependencies dependencies={dependencies} />
        </div>
        <ButtonGroup>
          <Button
            variant="secondary"
            onClick={() => updateTask({ ...task, status: 'done' })}
          >
            Done
          </Button>
          <ButtonLink href={`${id}/edit`}>Edit</ButtonLink>
          <Button variant="secondary" onClick={() => deleteTask(id)}>
            Delete
          </Button>
          <BackButton variant="secondary">Back</BackButton>
        </ButtonGroup>
      </div>
    </>
  );
};

export default Task;
