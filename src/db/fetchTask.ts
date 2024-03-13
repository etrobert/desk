import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { tasks } from '@/db/schema';

const connectionString = process.env.DATABASE_URL;

async function fetchTask(id: number) {
  if (!connectionString) throw new Error('DATABASE_URL must be set');
  const client = postgres(connectionString);
  const db = drizzle(client);
  const result = await db.select().from(tasks).where(eq(tasks.id, id));
  if (result.length === 0) return undefined;
  return result[0];
}

export default fetchTask;
