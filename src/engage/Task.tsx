import { Navigate, useParams } from 'react-router-dom';

import useTask from './useTask';

const Task = () => {
  const { id } = useParams<'id'>();
  const task = useTask(id);

  if (task === undefined) return <Navigate to=".." />;

  const { title } = task;

  return <>{title}</>;
};

export default Task;
