'use server';

import { eq } from 'drizzle-orm';
import { dependencies, tasks } from '@/db/schema';
import { db } from './db';

async function deleteTask(id: number) {
  // TODO: Use a transaction
  await db.delete(dependencies).where(eq(dependencies.taskId, id));
  await db.delete(dependencies).where(eq(dependencies.dependencyId, id));
  return await db.delete(tasks).where(eq(tasks.id, id));
}

export default deleteTask;
