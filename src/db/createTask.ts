import { db } from './db';
import { tasks } from './schema';

const createTask = async (title: string) =>
  db.insert(tasks).values({ title, userId: 1 });

export default createTask;
