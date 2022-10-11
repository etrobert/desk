import { collection, addDoc } from 'firebase/firestore';
import firestore from './firestore';
import type { CaptureItem } from './types';

const addCaptureItem = async (captureItem: CaptureItem) => {
  // Add a new document with a generated id.
  await addDoc(collection(firestore, 'capture-items'), captureItem);
};

export default addCaptureItem;
