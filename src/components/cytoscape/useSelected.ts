import { useEffect, useState } from 'react';

import type { RefObject } from 'react';
import type { Dependency } from '@/db/schema';

const getSelectedTasks = (cy: cytoscape.Core) =>
  cy.nodes(':selected').map((node) => parseInt(node.id()));

const getSelectedDependencies = (cy: cytoscape.Core) =>
  cy.edges(':selected').map((edge) => ({
    taskId: parseInt(edge.target().id()),
    dependencyId: parseInt(edge.source().id()),
  }));

const getSelected = (cy: cytoscape.Core) => ({
  tasks: getSelectedTasks(cy),
  dependencies: getSelectedDependencies(cy),
});

const useSelected = (cyRef: RefObject<cytoscape.Core>) => {
  const [selected, setSelected] = useState<{
    tasks: number[];
    dependencies: Dependency[];
  }>({ tasks: [], dependencies: [] });

  useEffect(() => {
    const cy = cyRef.current;
    if (cy === null) return;
    const updateSelected = () => setSelected(getSelected(cy));

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
