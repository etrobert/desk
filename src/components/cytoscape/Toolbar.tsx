import { Button } from '@/components/ui/button';
import { useState, type RefObject } from 'react';
import useSelected from './useSelected';

type Props = {
  runLayout: () => void;
  ehRef: RefObject<cytoscapeEdgehandles.EdgeHandlesInstance>;
  cyRef: RefObject<cytoscape.Core>;
};

const Toolbar = ({ runLayout, ehRef, cyRef }: Props) => {
  const [drawMode, setDrawMode] = useState(false);

  const toggleDrawMode = () => {
    const eh = ehRef.current;
    if (!eh) return;
    // @ts-expect-error edgehandles types are wrong
    if (eh.drawMode) {
      eh.disableDrawMode();
      setDrawMode(false);
    } else {
      eh.enableDrawMode();
      setDrawMode(true);
    }
  };

  const selected = useSelected(cyRef);

  const deleteSelected = () => {
    console.log('deleting ', { selected });
  };

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
