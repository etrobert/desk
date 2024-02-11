import useTasks from '../../data/tasks/useTasks';
import Cytoscape from './Cytoscape';

const Reflect = () => {
  const tasks = useTasks();

  if (tasks === null) return 'Loading...';

  const elements = tasks.map((task) => ({ data: task }));

  return (
    <div>
      <h1>Reflect</h1>
      <Cytoscape elements={elements} />
    </div>
  );
};

export default Reflect;
