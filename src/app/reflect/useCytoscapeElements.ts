import useTasks from '../../data/tasks/useTasks';

const useCytoscapeElements = () => {
  const tasks = useTasks();

  if (tasks === null) return null;

  const getTaskDependencies = (task: typeof tasks[number]) => {
    if (task.dependencies === undefined) return [];
    const taskEdges = task.dependencies.map((dependency) => ({
      data: { source: dependency, target: task.id },
    }));
    // Filter out edges that don't have a corresponding task
    return taskEdges.filter((edge) =>
      tasks.some((task) => task.id === edge.data.source)
    );
  };

  const nodes = tasks.map((task) => ({ data: task }));
  const edges = tasks.map(getTaskDependencies).flat();

  return [...nodes, ...edges];
};

export default useCytoscapeElements;
