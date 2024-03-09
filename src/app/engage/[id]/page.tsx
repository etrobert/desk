import Task from './Task';

const TaskPage = ({ params: { id } }: { params: { id: string } }) => (
  <Task id={id} />
);

export default TaskPage;
