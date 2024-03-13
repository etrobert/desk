import { db } from './db';
import { tasks } from './schema';

const fetchTasks = async () => db.select().from(tasks);

export default fetchTasks;
