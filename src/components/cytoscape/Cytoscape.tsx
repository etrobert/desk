'use client';

import { useCallback, useEffect, useRef } from 'react';

import { useRouter } from 'next/navigation';
import CytoscapePackage, { ElementDefinition } from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import dagre from 'cytoscape-dagre';
import stylesheet from './cytoscapeStylesheet';
import { Button } from '@/components/ui/button';

CytoscapePackage.use(dagre);

const layout = {
  name: 'dagre',
  rankDir: 'LR',
  nodeDimensionsIncludeLabels: true,
};

const CytoscapeView = ({ elements }: { elements: ElementDefinition[] }) => {
  const cyRef = useRef<cytoscape.Core | null>(null);
  const router = useRouter();

  useEffect(() => {
    cyRef.current?.on('tap', 'node', (node) => {
      router.push(`/engage/${node.target.data('id')}`);
    });
  }, [router]);

  const runLayout = useCallback(() => {
    cyRef.current?.layout(layout).run();
  }, []);

  useEffect(runLayout, [runLayout, elements]);

  return (
    <>
      <Button
        className="absolute right-0 top-0 m-4"
        variant="outline"
        onClick={runLayout}
      >
        Reset Layout
      </Button>
      <CytoscapeComponent
        className="h-[60vh] w-screen text-start"
        cy={(cy) => (cyRef.current = cy)}
        stylesheet={stylesheet}
        layout={layout}
        elements={elements}
      />
    </>
  );
};

export default CytoscapeView;
