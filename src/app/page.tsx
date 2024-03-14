import Cytoscape from '@/components/cytoscape/Cytoscape';
import { fetchDependencies } from '@/db/fetchDependencies';
import fetchTasks from '@/db/fetchTasks';

const Reflect = async () => {
  // TODO: Parallelize these requests
  const tasks = await fetchTasks();
  const dependencies = await fetchDependencies();
  return <Cytoscape tasks={tasks} dependencies={dependencies} />;
};

export default Reflect;
