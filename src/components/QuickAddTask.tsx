'use client';

import { useRef, useTransition } from 'react';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import createTaskAction from '@/actions/createTaskAction';
import { Task } from '@/db/schema';

type Props = {
  addOptimisticTask: (newTask: Task) => void;
};

const QuickAddTask = ({ addOptimisticTask }: Props) => {
  const ref = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [_, startTransition] = useTransition();

  return (
    <form
      ref={ref}
      className="absolute bottom-0 m-4 grid grid-flow-col gap-2"
      action={async (formData) => {
        const title = formData.get('title');
        if (typeof title !== 'string' || title === '') return;
        addOptimisticTask({
          id: -1,
          title: title,
          userId: -1,
          createdAt: new Date(),
        });
        ref.current?.reset();
        startTransition(() => createTaskAction(title));
      }}
    >
      <Input ref={inputRef} required name="title" className="h-10" autoFocus />
      <Button variant="secondary" size="icon" type="submit">
        <Plus />
      </Button>
    </form>
  );
};

export default QuickAddTask;
