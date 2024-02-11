import useTasks from '../../data/tasks/useTasks';
import D3Tree from './D3Tree';

// TODO: Remove
const data = {
  title: 'Root',
  children: [
    { title: 'Child 1' },
    {
      title: 'Child 2',
      children: [{ title: 'Grandchild 1' }, { title: 'Grandchild 2' }],
    },
  ],
} as const;

const Reflect = () => {
  const tasks = useTasks();

  if (tasks === null) return <>Loading...</>;

  const formattedTasks = {
    title: 'Root',
    children: tasks,
  };

  console.log(tasks);

  return (
    <div className="App">
      <D3Tree data={formattedTasks} />
    </div>
  );
};

export default Reflect;
