import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useCallback } from 'react';
import { firestore } from '../../firebase';
import type { Task } from '../../types';
import useUserPath from '../useUserPath';

const useAddTask = () => {
  const userPath = useUserPath();

  return useCallback(
    async (task: Omit<Task, 'id' | 'createdAt'>) => {
      // Add a new document with a generated id.
      userPath &&
        (await addDoc(collection(firestore, ...userPath, 'tasks'), {
          ...task,
          createdAt: serverTimestamp(),
        }));
    },
    [userPath]
  );
};

export default useAddTask;
