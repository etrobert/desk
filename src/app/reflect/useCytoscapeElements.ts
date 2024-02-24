import useTasks from '../../data/tasks/useTasks';

const useCytoscapeElements = () => {
  const tasks = useTasks();

  if (tasks === null) return null;

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

  return [...nodes, ...edges];
};

export default useCytoscapeElements;
