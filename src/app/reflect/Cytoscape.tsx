import type { ElementDefinition } from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';

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

const Cytoscape = ({ elements }: { elements: ElementDefinition[] }) => {
  return (
    <CytoscapeComponent
      stylesheet={stylesheet}
      layout={{ name: 'grid', rows: 3 }}
      style={{ width: '800px', height: '800px', textAlign: 'start' }}
      elements={elements}
    />
  );
};

export default Cytoscape;
