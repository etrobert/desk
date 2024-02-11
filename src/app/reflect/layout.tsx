import useTasks from '../../data/tasks/useTasks';
import Cytoscape from './Cytoscape';

const Reflect = () => {
  const tasks = useTasks();

  if (tasks === null) return 'Loading...';

  const nodes = tasks.map((task) => ({ data: task }));
  const edges = tasks
    .map((task) =>
      task.dependencies === undefined
        ? []
        : task.dependencies.map((dependency) => ({
            data: { source: dependency, target: task.id },
          }))
    )
    .flat();

  const elements = [...nodes, ...edges];

  return (
    <div>
      <h1>Reflect</h1>
      <Cytoscape elements={elements} />
    </div>
  );
};

export default Reflect;
