import { useRef } from 'react';
import useTasks from '../data/tasks/useTasks';
import { Button } from '@/components/ui/button';

type Props = {
  addDependency: (id: string) => void;
};

const DependenciesInput = ({ addDependency }: Props) => {
  const tasks = useTasks();
  const selectRef = useRef<HTMLSelectElement>(null);

  if (tasks === null) return <>Loading...</>;

  return (
    <div>
      <select ref={selectRef} id="new-dependency">
        {tasks.map((task) => (
          <option key={task.id} value={task.id}>
            {task.title}
          </option>
        ))}
      </select>
      <Button
        onClick={() => {
          if (selectRef.current === null) return;
          addDependency(selectRef.current?.value);
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default DependenciesInput;
