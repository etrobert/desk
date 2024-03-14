import estimateNodeSize from './estimateNodeSize';
import fetchTasks from '@/db/fetchTasks';
import { fetchDependencies } from '@/db/fetchDependencies';

const getCytoscapeElements = async () => {
  const tasks = await fetchTasks();
  const dependencies = await fetchDependencies();

  const nodes = tasks.map((task) => ({
    data: { ...task, id: task.id.toString(), ...estimateNodeSize(task) },
  }));
  const edges = dependencies.map((dependency) => ({
    data: {
      source: dependency.dependencyId.toString(),
      target: dependency.taskId.toString(),
    },
  }));

  return [...nodes, ...edges];
};

export default getCytoscapeElements;
