import { collection, orderBy, query } from 'firebase/firestore';
import firestore from '../firestore';
import { CaptureItem } from '../types';
import useCollection from './useCollection';

const q = query(
  collection(firestore, 'capture-items'),
  orderBy('createdAt', 'desc')
);

const useCaptureItems = () => useCollection<CaptureItem>(q);

export default useCaptureItems;
