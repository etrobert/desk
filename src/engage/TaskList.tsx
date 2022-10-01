import Button from '../Button';
import tasks from '../tasks';

const TaskList = () => (
  <ul>
    {tasks.map(({ id, title }) => (
      <li key={id}>
        <Button disabled>{title}</Button>
      </li>
    ))}
  </ul>
);

export default TaskList;
