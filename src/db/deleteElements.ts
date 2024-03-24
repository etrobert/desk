import { dependencies, tasks } from '@/db/schema';
import { db } from './db';
import { and, eq, inArray, or } from 'drizzle-orm';

import type { Dependency } from '@/db/schema';

async function deleteElements(
  ids: number[],
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

export default deleteElements;
