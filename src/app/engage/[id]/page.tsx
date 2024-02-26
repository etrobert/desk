import Task from './Task';

import './Task.css';

const TaskPage = ({ params: { id } }: { params: { id: string } }) => (
  <Task id={id} />
);

export default TaskPage;
