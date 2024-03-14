import { revalidatePath } from 'next/cache';
import { Button } from './ui/button';
import { Input } from './ui/input';
import createTask from '@/db/createTask';

async function add(formData: FormData) {
  'use server';
  const title = formData.get('title');
  if (typeof title !== 'string' || title === '') return;
  await createTask(title);
  revalidatePath('/');
}

const QuickAddTask = () => (
  <form className="flex items-center gap-2" action={add}>
    <Input name="title" />
    <Button variant="secondary" type="submit">
      Add
    </Button>
  </form>
);

export default QuickAddTask;
