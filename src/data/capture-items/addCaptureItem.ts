import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { firestore } from '../../firebase';
import type { CaptureItem } from '../../types';

const addCaptureItem = async (
  captureItem: Omit<CaptureItem, 'id' | 'createdAt'>
) => {
  // Add a new document with a generated id.
  await addDoc(collection(firestore, 'capture-items'), {
    ...captureItem,
    createdAt: serverTimestamp(),
  });
};

export default addCaptureItem;
