import { RefObject, useEffect, useState } from 'react';

const getSelectedNodes = (cy: cytoscape.Core) =>
  cy.nodes(':selected').map((node) => parseInt(node.id()));

const useSelected = (cyRef: RefObject<cytoscape.Core>) => {
  const [selected, setSelected] = useState<number[]>([]);

  useEffect(() => {
    const cy = cyRef.current;
    if (cy === null) return;
    const updateSelected = () => setSelected(getSelectedNodes(cy));

    cy.addListener('select', updateSelected);
    cy.addListener('unselect', updateSelected);
    cy.addListener('remove', updateSelected);

    return () => {
      cy.removeListener('select', updateSelected);
      cy.removeListener('unselect', updateSelected);
      cy.removeListener('remove', updateSelected);
    };
  }, [cyRef]);

  return selected;
};

export default useSelected;
