'use client';

import { useCallback, useEffect, useOptimistic, useRef } from 'react';

import CytoscapePackage from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import dagre from 'cytoscape-dagre';
import edgehandles from 'cytoscape-edgehandles';
import stylesheet from './cytoscapeStylesheet';
import Toolbar from './Toolbar';
import createDependencyAction from '@/actions/createDependencyAction';
import { Dependency, Task } from '@/db/schema';
import useCytoscapeElements from './useCytoscapeElements';
import QuickAddTask from '@/components/QuickAddTask';

CytoscapePackage.use(dagre);
CytoscapePackage.use(edgehandles);

const layout = {
  name: 'dagre',
  rankDir: 'LR',
  nodeDimensionsIncludeLabels: true,
};

type Props = {
  tasks: Task[];
  dependencies: Dependency[];
};

const CytoscapeView = ({ tasks, dependencies }: Props) => {
  const cyRef = useRef<cytoscape.Core | null>(null);
  const ehRef = useRef<cytoscapeEdgehandles.EdgeHandlesInstance>(null);

  const [optimisticTasks, addOptimisticTask] = useOptimistic(
    tasks,
    (tasks, newTask: Task) => [...tasks, newTask],
  );

  const [optimisticTasks2, removeOptimisticTasks] = useOptimistic(
    optimisticTasks,
    (tasks, taskIds: number[]) =>
      tasks.filter((task) => !taskIds.includes(task.id)),
  );

  const elements = useCytoscapeElements(optimisticTasks2, dependencies);

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
      <Toolbar
        cyRef={cyRef}
        removeOptimisticTasks={removeOptimisticTasks}
        runLayout={runLayout}
        ehRef={ehRef}
      />
      <QuickAddTask addOptimisticTask={addOptimisticTask} />
    </>
  );
};

export default CytoscapeView;
