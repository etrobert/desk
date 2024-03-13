import QuickAddTask from '@/components/QuickAddTask';
import Cytoscape from './Cytoscape';
import getCytoscapeElements from './getCytoscapeElements';

const Reflect = async () => {
  const elements = await getCytoscapeElements();
  return (
    <>
      <Cytoscape elements={elements} />
      <QuickAddTask />
    </>
  );
};

export default Reflect;
