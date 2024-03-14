import { RefObject, useCallback, useState } from 'react';

const useDrawMode = (
  ehRef: RefObject<cytoscapeEdgehandles.EdgeHandlesInstance>,
) => {
  const [drawMode, setDrawMode] = useState(false);

  const toggleDrawMode = useCallback(() => {
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
  }, [ehRef]);

  return { drawMode, toggleDrawMode };
};

export default useDrawMode;
