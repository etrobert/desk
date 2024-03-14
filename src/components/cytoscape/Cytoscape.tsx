'use client';

import { useCallback, useEffect, useRef } from 'react';

import CytoscapePackage, { ElementDefinition } from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import dagre from 'cytoscape-dagre';
import edgehandles from 'cytoscape-edgehandles';
import stylesheet from './cytoscapeStylesheet';
import { Button } from '@/components/ui/button';

CytoscapePackage.use(dagre);
CytoscapePackage.use(edgehandles);

const layout = {
  name: 'dagre',
  rankDir: 'LR',
  nodeDimensionsIncludeLabels: true,
};

const CytoscapeView = ({ elements }: { elements: ElementDefinition[] }) => {
  const cyRef = useRef<cytoscape.Core | null>(null);
  const ehRef = useRef<cytoscapeEdgehandles.EdgeHandlesInstance>(null);

  useEffect(() => {
    // @ts-expect-error No idea what's going on here
    ehRef.current = cyRef.current?.edgehandles();
  }, []);

  const runLayout = useCallback(() => {
    cyRef.current?.layout(layout).run();
  }, []);

  const toggleDrawMode = useCallback(() => {
    if (!ehRef.current) return;
    const eh = ehRef.current;
    // @ts-expect-error edgehandles types are wrong
    if (eh.drawMode) eh.disableDrawMode();
    else eh.enableDrawMode();
  }, []);

  useEffect(runLayout, [runLayout, elements]);

  return (
    <>
      <CytoscapeComponent
        className="h-full w-screen"
        cy={(cy) => (cyRef.current = cy)}
        stylesheet={stylesheet}
        layout={layout}
        elements={elements}
      />
      <Button
        className="absolute right-0 top-0 m-4"
        variant="outline"
        onClick={runLayout}
      >
        Reset Layout
      </Button>
      <Button
        className="absolute left-0 top-0 m-4"
        variant="outline"
        onClick={toggleDrawMode}
      >
        Draw
      </Button>
    </>
  );
};

export default CytoscapeView;
