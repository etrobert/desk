'use server';

import { revalidatePath } from 'next/cache';
import deleteElements from '@/db/deleteElements';

import type { Dependency } from '@/db/schema';

async function deleteElementsAction(
  taskIds: number[],
  dependenciesToDelete: Dependency[],
) {
  await deleteElements(taskIds, dependenciesToDelete);
  revalidatePath('/');
}

export default deleteElementsAction;
