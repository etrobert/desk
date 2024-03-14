import { Button } from '@/components/ui/button';
import { type RefObject } from 'react';
import useSelected from './useSelected';
import useDrawMode from './useDrawMode';
import deleteTasksAction from '@/actions/deleteTasksAction';
import { Hand, RefreshCcw, Spline, Trash2 } from 'lucide-react';

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
      <Button variant="outline" size="icon" onClick={runLayout}>
        <RefreshCcw />
      </Button>
      <Button variant="outline" size="icon" onClick={toggleDrawMode}>
        {drawMode ? <Hand /> : <Spline />}
      </Button>
      <Button
        disabled={selected.length === 0}
        variant="outline"
        size="icon"
        onClick={deleteSelected}
      >
        <Trash2 />
      </Button>
    </div>
  );
};

export default Toolbar;
