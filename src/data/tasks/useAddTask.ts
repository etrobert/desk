import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useCallback } from 'react';
import { firestore } from '../../firebase';
import useUserPath from '../useUserPath';

import type { Timestamp } from 'firebase/firestore';
import type { Task } from '../../types';

const useAddTask = () => {
  const userPath = useUserPath();

  return useCallback(
    async (task: { title: string; tags: string[] }) => {
      if (!userPath) return;
      const newTask: Omit<Task, 'id'> = {
        ...task,
        // serverTimestamp is not typed correctly in the firebase package
        createdAt: serverTimestamp() as Timestamp,
        status: 'not started',
        dependencies: [],
      };
      // Add a new document with a generated id.
      await addDoc(collection(firestore, ...userPath, 'tasks'), newTask);
    },
    [userPath]
  );
};

export default useAddTask;
