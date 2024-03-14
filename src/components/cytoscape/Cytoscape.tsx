'use client';

import { useCallback, useEffect, useRef } from 'react';

import CytoscapePackage, { ElementDefinition } from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import dagre from 'cytoscape-dagre';
import edgehandles from 'cytoscape-edgehandles';
import stylesheet from './cytoscapeStylesheet';
import Toolbar from './Toolbar';
import createDependencyAction from '@/actions/createDependencyAction';

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
    cyRef.current?.on(
      'ehcomplete',
      async (_, sourceNode, targetNode, addedEdge) => {
        await createDependencyAction(targetNode.id(), sourceNode.id());
        cyRef.current?.remove(addedEdge);
      },
    );
  }, []);

  const runLayout = useCallback(() => {
    cyRef.current?.layout(layout).run();
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
      <Toolbar cyRef={cyRef} runLayout={runLayout} ehRef={ehRef} />
    </>
  );
};

export default CytoscapeView;
