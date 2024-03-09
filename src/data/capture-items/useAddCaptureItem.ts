import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useCallback } from 'react';
import { firestore } from '../../firebase';
import { CaptureItem } from '../../types';
import useUserPath from '../useUserPath';

const useAddCaptureItem = () => {
  const userPath = useUserPath();

  return useCallback(
    (captureItem: Omit<CaptureItem, 'id' | 'createdAt'>) =>
      userPath &&
      // Add a new document with a generated id.
      addDoc(collection(firestore, ...userPath, 'capture-items'), {
        ...captureItem,
        createdAt: serverTimestamp(),
      }),
    [userPath],
  );
};

export default useAddCaptureItem;
