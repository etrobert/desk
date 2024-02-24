import Cytoscape from './Cytoscape';
import useCytoscapeElements from './useCytoscapeElements';

const Reflect = () => {
  const elements = useCytoscapeElements();

  if (elements === null) return <>Loading...</>;

  return (
    <div>
      <h1>Reflect</h1>
      <Cytoscape elements={elements} />
    </div>
  );
};

export default Reflect;
