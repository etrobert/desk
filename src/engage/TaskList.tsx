import ButtonLink from '../ButtonLink';
import tasks from '../mocks/tasks';

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
