'use client';

import { useEffect, useRef, useTransition } from 'react';
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
      className="absolute bottom-0 m-4 flex items-center gap-2"
      action={async (formData) => {
        startTransition(() => createTaskAction(formData));
        ref.current?.reset();
      }}
    >
      <Input
        ref={inputRef}
        required
        name="title"
        placeholder={isPending ? 'Adding...' : undefined}
        disabled={isPending}
      />
      <Button variant="secondary" type="submit">
        Add
      </Button>
    </form>
  );
};

export default QuickAddTask;
