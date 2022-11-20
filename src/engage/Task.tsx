import { Navigate, useParams } from 'react-router-dom';

import BackButton from '../components/BackButton';
import Button from '../components/Button';
import ButtonGroup from '../components/ButtonGroup';

import useDeleteTask from '../data/tasks/useDeleteTask';
import useTask from '../data/tasks/useTask';

const Task = () => {
  const { id } = useParams<'id'>();
  const task = useTask(id);
  const deleteTask = useDeleteTask();

  if (id === undefined || task === undefined) return <Navigate to=".." />;
  if (task === null) return <>Loading...</>;

  const { title } = task;

  return (
    <>
      <p>{title}</p>
      <ButtonGroup>
        <Button onClick={() => deleteTask(id)}>Delete</Button>
        <BackButton>Back</BackButton>
      </ButtonGroup>
    </>
  );
};

export default Task;
