'use client';

import { deleteDoc, doc } from 'firebase/firestore';
import { useCallback } from 'react';
import { firestore } from '../../firebase';
import useUserPath from '../useUserPath';
import useLatestCaptureItem from './useLatestCaptureItem';

const useDeleteLatestCaptureItem = () => {
  const { latestCaptureItem } = useLatestCaptureItem();
  const userPath = useUserPath();

  return useCallback(async () => {
    if (latestCaptureItem === null || userPath === null) return;
    await deleteDoc(
      doc(firestore, ...userPath, 'capture-items', latestCaptureItem.id)
    );
  }, [userPath, latestCaptureItem]);
};

export default useDeleteLatestCaptureItem;
