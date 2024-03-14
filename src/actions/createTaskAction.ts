'use server';

import createTask from '@/db/createTask';
import { revalidatePath } from 'next/cache';

export async function createTaskAction(title: string) {
  await createTask(title);
  revalidatePath('/');
}

export default createTaskAction;
