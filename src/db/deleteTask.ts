'use server';

import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { dependencies, tasks } from '@/db/schema';

const connectionString = process.env.DATABASE_URL;

async function deleteTask(id: number) {
  if (!connectionString) throw new Error('DATABASE_URL must be set');
  const client = postgres(connectionString);
  const db = drizzle(client);

  // TODO: Use a transaction
  await db.delete(dependencies).where(eq(dependencies.taskId, id));
  await db.delete(dependencies).where(eq(dependencies.dependencyId, id));
  return await db.delete(tasks).where(eq(tasks.id, id));
}

export default deleteTask;
