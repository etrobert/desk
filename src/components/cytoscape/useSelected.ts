import { EventObject, NodeSingular } from 'cytoscape';
import { RefObject, useEffect, useState } from 'react';

const useSelected = (cyRef: RefObject<cytoscape.Core>) => {
  const [selected, setSelected] = useState<number[]>([]);

  const remove = (event: EventObject) => {
    const target = event.target as NodeSingular;
    const id = parseInt(target.id());
    setSelected((selected) => selected.filter((s) => s != id));
  };

  useEffect(() => {
    cyRef.current?.on('select', (e) => {
      const target = e.target as NodeSingular;
      const id = parseInt(target.id());
      setSelected((selected) => [...new Set([...selected, id])]);
    });
    cyRef.current?.on('unselect', remove);
    cyRef.current?.on('remove', remove);
  }, [cyRef]);

  return selected;
};

export default useSelected;
