'use client';

import useAddTask from '@/data/tasks/useAddTask';
import { Button } from './ui/button';
import { Input } from './ui/input';

const QuickAddTask = () => {
  const addTask = useAddTask();

  return (
    <form
      className="flex items-center gap-2"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const title = new FormData(form).get('title');
        if (typeof title !== 'string' || title === '') return;
        form.reset();
        addTask({ title, tags: [], dependencies: [] });
      }}
    >
      <Input name="title" />
      <Button variant="secondary">Add</Button>
    </form>
  );
};

export default QuickAddTask;
