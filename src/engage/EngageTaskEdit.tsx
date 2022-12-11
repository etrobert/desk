import { Navigate, useNavigate, useParams } from 'react-router-dom';

import TaskEdit from '../components/TaskEdit';

import useTask from '../data/tasks/useTask';
import useUpdateTask from '../data/tasks/useUpdateTask';

const EngageTaskEdit = () => {
  const { id } = useParams<'id'>();
  const task = useTask(id);
  const updateTask = useUpdateTask();
  const navigate = useNavigate();

  if (id === undefined || task === undefined) return <Navigate to=".." />;
  if (task === null) return <>Loading...</>;

  return (
    <TaskEdit
      task={task}
      onSubmit={(task) => {
        updateTask(task);
        navigate(-1);
      }}
    />
  );
};

export default EngageTaskEdit;
