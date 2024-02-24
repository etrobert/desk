import { useRef } from 'react';
import CytoscapePackage from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import dagre from 'cytoscape-dagre';
import stylesheet from './cytoscapeStylesheet';
import Button from '../../components/Button';
import useCytoscapeElements from './useCytoscapeElements';

CytoscapePackage.use(dagre);

const layout = {
  name: 'dagre',
  rankDir: 'LR',
  nodeDimensionsIncludeLabels: true,
};

const CytoscapeView = () => {
  const elements = useCytoscapeElements();
  const cyRef = useRef<cytoscape.Core | null>(null);

  if (elements === null) return <>Loading...</>;

  return (
    <>
      <Button onClick={() => cyRef.current?.layout(layout).run()}>
        Reset Layout
      </Button>
      <CytoscapeComponent
        cy={(cy) => (cyRef.current = cy)}
        stylesheet={stylesheet}
        layout={layout}
        style={{ width: '800px', height: '800px', textAlign: 'start' }}
        elements={elements}
      />
    </>
  );
};

export default CytoscapeView;
