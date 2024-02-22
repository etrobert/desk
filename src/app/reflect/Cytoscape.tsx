import { useRef } from 'react';
import CytoscapePackage from 'cytoscape';
import type { ElementDefinition } from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import dagre from 'cytoscape-dagre';

CytoscapePackage.use(dagre);

const stylesheet = [
  // the stylesheet for the graph
  {
    selector: 'node',
    style: {
      'background-color': '#666',
      color: '#fff',
      label: 'data(title)',
    },
  },

  {
    selector: 'edge',
    style: {
      width: 3,
      'line-color': '#ccc',
      'target-arrow-color': '#ccc',
      'target-arrow-shape': 'triangle',
      'curve-style': 'bezier',
    },
  },
];

const layout = {
  name: 'dagre',
  rankDir: 'LR',
  nodeDimensionsIncludeLabels: true,
  animate: true,
};

const CytoscapeView = ({ elements }: { elements: ElementDefinition[] }) => {
  const cyRef = useRef<cytoscape.Core | null>(null);

  return (
    <>
      <button onClick={() => cyRef.current?.layout(layout).run()}>Redo</button>
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
