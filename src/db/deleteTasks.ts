import { dependencies, tasks } from '@/db/schema';
import { db } from './db';
import { inArray, or } from 'drizzle-orm';

async function deleteTasks(ids: number[]) {
  await db.transaction(async (tx) => {
    await tx
      .delete(dependencies)
      .where(
        or(
          inArray(dependencies.taskId, ids),
          inArray(dependencies.dependencyId, ids),
        ),
      );
    await tx.delete(tasks).where(inArray(tasks.id, ids));
  });
}

export default deleteTasks;
