import { deleteDoc, doc } from 'firebase/firestore';
import { useCallback } from 'react';
import firestore from '../../firestore';
import useLatestCaptureItem from './useLatestCaptureItem';

const useDeleteLatestCaptureItem = () => {
  const { latestCaptureItem } = useLatestCaptureItem();

  return useCallback(async () => {
    if (latestCaptureItem === null) return;
    await deleteDoc(doc(firestore, 'capture-items', latestCaptureItem.id));
  }, [latestCaptureItem]);
};

export default useDeleteLatestCaptureItem;
