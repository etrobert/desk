import { collection, query } from 'firebase/firestore';
import firestore from '../firestore';
import useCollection from './useCollection';

import type { Task } from '../types';

const useTasks = () =>
  useCollection<Task>(query(collection(firestore, 'tasks')));

export default useTasks;
