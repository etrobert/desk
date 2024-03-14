import { Button } from '@/components/ui/button';
import { type RefObject } from 'react';
import useSelected from './useSelected';
import useDrawMode from './useDrawMode';
import deleteTasksAction from '@/actions/deleteTasksAction';

type Props = {
  runLayout: () => void;
  ehRef: RefObject<cytoscapeEdgehandles.EdgeHandlesInstance>;
  cyRef: RefObject<cytoscape.Core>;
};

const Toolbar = ({ runLayout, ehRef, cyRef }: Props) => {
  const selected = useSelected(cyRef);
  const { drawMode, toggleDrawMode } = useDrawMode(ehRef);

  const deleteSelected = () => deleteTasksAction(selected);

  return (
    <div className="absolute bottom-0 right-0 m-4 flex gap-2">
      <Button variant="outline" onClick={runLayout}>
        Reset Layout
      </Button>
      <Button variant="outline" onClick={toggleDrawMode}>
        {drawMode ? 'Stop Draw' : 'Draw'}
      </Button>
      <Button
        disabled={selected.length === 0}
        variant="outline"
        onClick={deleteSelected}
      >
        Delete
      </Button>
    </div>
  );
};

export default Toolbar;
