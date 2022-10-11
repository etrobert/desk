import ButtonLink from '../ButtonLink';
import useTasks from '../data/useTasks';

const TaskList = () => {
  const tasks = useTasks();
  if (tasks === null) return <>Loading...</>;
  return (
    <ul>
      {tasks.map(({ id, title }) => (
        <li key={id}>
          <ButtonLink to={id}>{title}</ButtonLink>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
