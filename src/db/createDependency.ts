import { db } from './db';
import { dependencies } from './schema';

const createDependency = (taskId: number, dependencyId: number) =>
  db.insert(dependencies).values({ taskId, dependencyId });

export default createDependency;
