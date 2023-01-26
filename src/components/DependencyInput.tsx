import { useState } from 'react';
import useTasks from '../data/tasks/useTasks';

type Props = {
  onNewDependency: (newDependency: string) => void;
};

const DependencyInput = ({ onNewDependency }: Props) => {
  const tasks = useTasks();
  const [newDependency, setNewDependency] = useState<string | undefined>(
    tasks?.[0]?.id
  );

  return (
    <div style={{ display: 'grid', gridAutoFlow: 'column' }}>
      <select
        onChange={(event) => setNewDependency(event.target.value)}
        id="dependency-select"
      >
        {tasks?.map((task) => (
          <option key={task.id} value={task.id}>
            {task.title}
          </option>
        ))}
      </select>
      <button
        onClick={(event) => {
          event.preventDefault();
          newDependency && onNewDependency(newDependency);
        }}
      >
        Add Dependency
      </button>
    </div>
  );
};

export default DependencyInput;
