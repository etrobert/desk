import QuickAddTask from '@/components/QuickAddTask';
import Cytoscape from '@/components/cytoscape/Cytoscape';
import getCytoscapeElements from '@/components/cytoscape/getCytoscapeElements';

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
