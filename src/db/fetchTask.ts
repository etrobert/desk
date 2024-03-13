import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { dependencies, tasks } from '@/db/schema';

const connectionString = process.env.DATABASE_URL;

async function fetchTask(id: number) {
  if (!connectionString) throw new Error('DATABASE_URL must be set');
  const client = postgres(connectionString);
  const db = drizzle(client);
  const task = await db.select().from(tasks).where(eq(tasks.id, id));

  // Task not found
  if (task.length === 0) return undefined;

  // TODO: Only execute one query in this function
  const taskDependencies = await db
    .select()
    .from(dependencies)
    .innerJoin(tasks, eq(dependencies.dependencyId, tasks.id))
    .where(eq(dependencies.taskId, id));

  return {
    ...task[0],
    dependencies: taskDependencies.map(({ tasks }) => tasks),
  };
}

export default fetchTask;
