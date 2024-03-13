import { db } from './db';
import { dependencies } from './schema';

export const fetchDependencies = () => db.select().from(dependencies);
