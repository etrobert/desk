import { dependencies, tasks } from '@/db/schema';
import { db } from './db';
import { and, eq, inArray, or } from 'drizzle-orm';

import type { Dependency } from '@/db/schema';

async function deleteElements(
  taskIds: number[],
  dependenciesToDelete: Dependency[],
) {
  await db.transaction(async (tx) => {
    for (const dependency of dependenciesToDelete) {
      await tx
        .delete(dependencies)
        .where(
          and(
            eq(dependencies.taskId, dependency.taskId),
            eq(dependencies.dependencyId, dependency.dependencyId),
          ),
        );
    }
    if (taskIds.length === 0) return;
    await tx
      .delete(dependencies)
      .where(
        or(
          inArray(dependencies.taskId, taskIds),
          inArray(dependencies.dependencyId, taskIds),
        ),
      );
    await tx.delete(tasks).where(inArray(tasks.id, taskIds));
  });
}

export default deleteElements;
