'use client';

import { useEffect, useRef } from 'react';

import { useRouter } from 'next/navigation';
import CytoscapePackage from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import dagre from 'cytoscape-dagre';
import stylesheet from './cytoscapeStylesheet';
import Button from '../../components/Button';
import useCytoscapeElements from './useCytoscapeElements';

import './Cytoscape.css';

CytoscapePackage.use(dagre);

const layout = {
  name: 'dagre',
  rankDir: 'LR',
  nodeDimensionsIncludeLabels: true,
};

const CytoscapeView = () => {
  const elements = useCytoscapeElements();
  const cyRef = useRef<cytoscape.Core | null>(null);
  const router = useRouter();

  useEffect(() => {
    cyRef.current?.on('tap', 'node', (node) => {
      router.push(`/engage/${node.target.data('id')}`);
    });
  }, [router]);

  if (elements === null) return <>Loading...</>;

  return (
    <>
      <Button onClick={() => cyRef.current?.layout(layout).run()}>
        Reset Layout
      </Button>
      <CytoscapeComponent
        className="Cytoscape"
        cy={(cy) => (cyRef.current = cy)}
        stylesheet={stylesheet}
        layout={layout}
        elements={elements}
      />
    </>
  );
};

export default CytoscapeView;
