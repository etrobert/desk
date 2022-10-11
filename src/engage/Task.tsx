import { Navigate, useParams } from 'react-router-dom';

import BackButton from '../BackButton';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';

import useTask from '../data/useTask';

const Task = () => {
  const { id } = useParams<'id'>();
  const task = useTask(id);

  if (task === undefined) return <Navigate to=".." />;
  if (task === null) return <>Loading...</>;

  const { title } = task;

  return (
    <>
      {title}
      <ButtonGroup>
        <Button disabled>Done</Button>
        <BackButton>Back</BackButton>
      </ButtonGroup>
    </>
  );
};

export default Task;
