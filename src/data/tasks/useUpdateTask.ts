import { doc, updateDoc } from 'firebase/firestore';
import { useCallback } from 'react';
import { firestore } from '../../firebase';
import useUserPath from '../useUserPath';

import type { Task } from '../../types';

const useUpdateTask = () => {
  const userPath = useUserPath();
  return useCallback(
    async ({ id, ...taskWithoutId }: Task) => {
      userPath &&
        (await updateDoc(
          doc(firestore, ...userPath, 'tasks', id),
          taskWithoutId,
        ));
    },
    [userPath],
  );
};

export default useUpdateTask;
