import ButtonLink from '../ButtonLink';
import useTasks from '../data/useTasks';

import './TaskList.css';

const TaskList = () => {
  const tasks = useTasks();
  if (tasks === null) return <>Loading...</>;
  return (
    <ul className="TaskList">
      {tasks.map(({ id, title }) => (
        <li key={id}>
          <ButtonLink to={id}>{title}</ButtonLink>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
