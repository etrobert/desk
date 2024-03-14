import { Button } from '@/components/ui/button';

type Props = {
  runLayout: () => void;
  toggleDrawMode: () => void;
};

const Toolbar = ({ runLayout, toggleDrawMode }: Props) => {
  return (
    <div className="absolute bottom-0 right-0 m-4 flex gap-2">
      <Button variant="outline" onClick={runLayout}>
        Reset Layout
      </Button>
      <Button variant="outline" onClick={toggleDrawMode}>
        Draw
      </Button>
    </div>
  );
};

export default Toolbar;
