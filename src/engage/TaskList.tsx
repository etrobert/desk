import ButtonLink from '../ButtonLink';
import tasks from '../tasks';

const TaskList = () => (
  <ul>
    {tasks.map(({ id, title }) => (
      <li key={id}>
        <ButtonLink to={id}>{title}</ButtonLink>
      </li>
    ))}
  </ul>
);

export default TaskList;
