import { Navigate, useParams } from 'react-router-dom';

import BackButton from '../components/BackButton';
import Button from '../components/Button';
import ButtonGroup from '../components/ButtonGroup';
import TagList from '../components/TagList';

import useUpdateTask from '../data/tasks/useUpdateTask';
import useDeleteTask from '../data/tasks/useDeleteTask';
import useTask from '../data/tasks/useTask';

import './Task.css';

const Task = () => {
  const { id } = useParams<'id'>();
  const task = useTask(id);
  const updateTask = useUpdateTask();
  const deleteTask = useDeleteTask();

  if (id === undefined || task === undefined) return <Navigate to=".." />;
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
          <Button onClick={() => deleteTask(id)}>Delete</Button>
          <BackButton>Back</BackButton>
        </ButtonGroup>
      </div>
    </>
  );
};

export default Task;
