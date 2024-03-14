'use client';

import { useEffect, useRef, useTransition } from 'react';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import createTaskAction from '@/actions/createTaskAction';

const QuickAddTask = () => {
  const ref = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isPending, startTransition] = useTransition();

  // Refocus the input when task has been added
  useEffect(() => {
    if (!isPending) inputRef.current?.focus();
  }, [isPending]);

  return (
    <form
      ref={ref}
      className="absolute bottom-0 m-4 grid grid-flow-col gap-2"
      action={async (formData) => {
        startTransition(() => createTaskAction(formData));
        ref.current?.reset();
      }}
    >
      <Input
        ref={inputRef}
        required
        name="title"
        className="h-10"
        placeholder={isPending ? 'Adding...' : undefined}
        disabled={isPending}
      />
      <Button variant="secondary" size="icon" type="submit">
        <Plus />
      </Button>
    </form>
  );
};

export default QuickAddTask;
