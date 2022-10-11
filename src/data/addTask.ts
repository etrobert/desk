import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import firestore from '../firestore';
import type { Task } from '../types';

const addTask = async (task: Omit<Task, 'id' | 'createdAt'>) => {
  // Add a new document with a generated id.
  await addDoc(collection(firestore, 'tasks'), {
    ...task,
    createdAt: serverTimestamp(),
  });
};

export default addTask;
