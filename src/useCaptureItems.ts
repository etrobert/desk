import { collection, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import firestore from './firestore';

type CaptureItem = {
  value: string;
};

const q = query(collection(firestore, 'capture-items'));

const useCaptureItems = () => {
  const [captureItems, setCaptureItems] = useState<CaptureItem[] | null>(null);

  useEffect(
    () =>
      onSnapshot(q, (querySnapshot) => {
        const captureItems: CaptureItem[] = [];
        querySnapshot.forEach((captureItem) =>
          captureItems.push(captureItem.data() as CaptureItem)
        );
        setCaptureItems(captureItems);
      }),
    []
  );

  return captureItems;
};

export default useCaptureItems;
