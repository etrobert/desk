import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import firestore from '../firestore';
import type { CaptureItem } from '../types';

const q = query(
  collection(firestore, 'capture-items'),
  orderBy('createdAt', 'desc')
);

const useCaptureItems = () => {
  const [captureItems, setCaptureItems] = useState<CaptureItem[] | null>(null);

  useEffect(
    () =>
      onSnapshot(q, (querySnapshot) => {
        const captureItems: CaptureItem[] = [];
        querySnapshot.forEach((captureItem) => {
          captureItems.push({
            ...captureItem.data(),
            id: captureItem.id,
          } as CaptureItem);
        });
        setCaptureItems(captureItems);
      }),
    []
  );

  return captureItems;
};

export default useCaptureItems;
