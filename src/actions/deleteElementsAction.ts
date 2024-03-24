'use server';

import { revalidatePath } from 'next/cache';
import deleteElements from '@/db/deleteElements';

import type { Dependency } from '@/db/schema';

async function deleteElementsAction(
  ids: number[],
  dependenciesToDelete: Dependency[],
) {
  await deleteElements(ids, dependenciesToDelete);
  revalidatePath('/');
}

export default deleteElementsAction;
