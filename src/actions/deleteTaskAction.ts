'use server';

import deleteTask from '@/db/deleteTask';
import { revalidatePath } from 'next/cache';

async function deleteTaskAction(id: number) {
  await deleteTask(id);
  revalidatePath('/');
}

export default deleteTaskAction;
