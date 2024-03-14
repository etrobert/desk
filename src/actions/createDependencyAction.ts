'use server';

import { revalidatePath } from 'next/cache';
import createDependency from '@/db/createDependency';

const createDependencyAction = async (taskId: number, dependencyId: number) => {
  await createDependency(taskId, dependencyId);
  revalidatePath('/');
};

export default createDependencyAction;
