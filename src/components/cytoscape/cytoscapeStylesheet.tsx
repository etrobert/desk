import type { Stylesheet } from 'cytoscape';

export const textMaxWidth = 180;

const stylesheet: Stylesheet[] = [
  // the stylesheet for the graph
  {
    selector: 'node',
    style: {
      'background-color': '#1e293b',
      color: '#fff',
      label: 'data(title)',
      'text-valign': 'center',
      'text-wrap': 'wrap',
      'text-max-width': `${textMaxWidth}px`,
      shape: 'round-rectangle',
      width: 'data(width)',
      height: 'data(height)',
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

export default stylesheet;
