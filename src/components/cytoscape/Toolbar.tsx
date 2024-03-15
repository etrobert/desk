import { Button } from '@/components/ui/button';
import { useTransition, type RefObject } from 'react';
import useSelected from './useSelected';
import useDrawMode from './useDrawMode';
import deleteTasksAction from '@/actions/deleteTasksAction';
import { RefreshCcw, Spline, Trash2 } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';

type Props = {
  runLayout: () => void;
  removeOptimisticTasks: (taskIds: number[]) => void;
  ehRef: RefObject<cytoscapeEdgehandles.EdgeHandlesInstance>;
  cyRef: RefObject<cytoscape.Core>;
};

const Toolbar = ({ runLayout, removeOptimisticTasks, ehRef, cyRef }: Props) => {
  const [_, startTransition] = useTransition();
  const selected = useSelected(cyRef);
  const { toggleDrawMode } = useDrawMode(ehRef);

  const deleteSelected = () => {
    startTransition(() => {
      removeOptimisticTasks(selected);
      deleteTasksAction(selected);
    });
  };

  return (
    <div className="absolute bottom-0 right-0 m-4 flex gap-2">
      <Button variant="outline" size="icon" onClick={runLayout}>
        <RefreshCcw />
      </Button>
      <Toggle variant="outline" size="icon" onClick={toggleDrawMode}>
        <Spline />
      </Toggle>
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
