import { Navigate, useParams } from 'react-router-dom';

import BackButton from '../../../components/BackButton';
import Button from '../../../components/Button';
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

const Task = ({ id }: Props) => {
  const task = useTask(id);
  const updateTask = useUpdateTask();
  const deleteTask = useDeleteTask();

  if (task === undefined) return <Navigate to=".." />;
  if (task === null) return <>Loading...</>;

  const { title, tags } = task;

  return (
    <>
      <div className="Task__content">
        <p className="Task__title">{title}</p>
        <TagList tags={tags} />
        <ButtonGroup>
          <Button onClick={() => updateTask({ ...task, status: 'done' })}>
            Done
          </Button>
          <ButtonLink to={'edit'}>Edit</ButtonLink>
          <Button onClick={() => deleteTask(id)}>Delete</Button>
          <BackButton>Back</BackButton>
        </ButtonGroup>
      </div>
    </>
  );
};

export default Task;
