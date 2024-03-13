import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { tasks } from '@/db/schema';

const connectionString = process.env.DATABASE_URL;

async function fetchTasks() {
  if (!connectionString) throw new Error('DATABASE_URL must be set');
  const client = postgres(connectionString);
  const db = drizzle(client);
  return await db.select().from(tasks);
}

export default fetchTasks;
