'use server';

import createTask from '@/db/createTask';
import { revalidatePath } from 'next/cache';

export async function createTaskAction(formData: FormData) {
  const title = formData.get('title');
  if (typeof title !== 'string' || title === '')
    throw new Error('Title is required');
  await createTask(title);
  revalidatePath('/');
}

export default createTaskAction;
