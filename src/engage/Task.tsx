import { Navigate, useParams } from 'react-router-dom';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import ButtonLink from '../ButtonLink';

import useTask from './useTask';

const Task = () => {
  const { id } = useParams<'id'>();
  const task = useTask(id);

  if (task === undefined) return <Navigate to=".." />;

  const { title } = task;

  return (
    <>
      {title}
      <ButtonGroup>
        <Button disabled>Done</Button>
        <ButtonLink to="..">Back</ButtonLink>
      </ButtonGroup>
    </>
  );
};

export default Task;
