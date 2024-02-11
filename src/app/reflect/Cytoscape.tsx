import { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';

const setupCytoscape = (ref: React.RefObject<HTMLDivElement>) => {
  if (ref.current === null) return;
  cytoscape({
    container: ref.current,

    elements: [
      // list of graph elements to start with
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
    ],

    style: [
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
    ],

    layout: {
      name: 'grid',
      rows: 1,
    },
  });
};

const Cytoscape = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setupCytoscape(ref), []);

  return (
    <div
      style={{ width: '900px', height: '900px', textAlign: 'start' }}
      ref={ref}
    />
  );
};

export default Cytoscape;
