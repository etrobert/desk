'use server';

import { eq } from 'drizzle-orm';
import { dependencies, tasks } from '@/db/schema';
import { db } from './db';
import { revalidatePath } from 'next/cache';

async function deleteTask(id: number) {
  // TODO: Use a transaction
  await db.delete(dependencies).where(eq(dependencies.taskId, id));
  await db.delete(dependencies).where(eq(dependencies.dependencyId, id));
  await db.delete(tasks).where(eq(tasks.id, id));
  revalidatePath('/');
}

export default deleteTask;
