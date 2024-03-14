'use server';

import { revalidatePath } from 'next/cache';
import deleteTasks from '@/db/deleteTasks';

async function deleteTasksAction(ids: number[]) {
  await deleteTasks(ids);
  revalidatePath('/');
}

export default deleteTasksAction;
