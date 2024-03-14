import { eq } from 'drizzle-orm';
import { dependencies, tasks } from '@/db/schema';
import { db } from './db';

async function fetchTask(id: number) {
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
