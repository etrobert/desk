import { deleteDoc, doc } from 'firebase/firestore';
import { useCallback } from 'react';
import { firestore } from '../../firebase';
import useUserPath from '../useUserPath';

const useDeleteTask = () => {
  const userPath = useUserPath();
  return useCallback(
    async (id: string) => {
      userPath && (await deleteDoc(doc(firestore, ...userPath, 'tasks', id)));
    },
    [userPath],
  );
};

export default useDeleteTask;
