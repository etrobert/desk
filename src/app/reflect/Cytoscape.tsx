import CytoscapeComponent from 'react-cytoscapejs';

const stylesheet = [
  // the stylesheet for the graph
  {
    selector: 'node',
    style: {
      'background-color': '#666',
      label: 'data(id)',
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

const elements = [
  {
    // node a
    data: { id: 'a' },
  },
  {
    // node b
    data: { id: 'b' },
  },
  {
    // edge ab
    data: { id: 'ab', source: 'a', target: 'b' },
  },
];

const Cytoscape = () => {
  return (
    <CytoscapeComponent
      stylesheet={stylesheet}
      layout={{ name: 'grid', rows: 1 }}
      style={{ width: '800px', height: '800px', textAlign: 'start' }}
      elements={elements}
    />
  );
};

export default Cytoscape;
