import { useState } from 'react';
import useTasks from '../data/tasks/useTasks';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Props = {
  addDependency: (id: string) => void;
};

const DependenciesInput = ({ addDependency }: Props) => {
  const tasks = useTasks();
  const [value, setValue] = useState<string>();

  if (tasks === null) return <>Loading...</>;

  return (
    <div className="flex gap-2">
      <Select onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder="Depencency" />
        </SelectTrigger>
        <SelectContent>
          {tasks.map((task) => (
            <SelectItem key={task.id} value={task.id}>
              {task.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        variant="secondary"
        type="button"
        onClick={() => {
          if (!value) return;
          addDependency(value);
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default DependenciesInput;
