import { collection, orderBy, query } from 'firebase/firestore';
import { createContext, ReactNode } from 'react';
import useCollection from '../useCollection';
import { firestore } from '../../firebase';
import { CaptureItem } from '../../types';

const CaptureItemsContext = createContext<CaptureItem[] | null>(null);

type Props = {
  children: ReactNode;
};

const q = query(
  collection(firestore, 'capture-items'),
  orderBy('createdAt', 'desc')
);

function CaptureItemsContextProvider({ children }: Props) {
  const captureItems = useCollection<CaptureItem>(q);

  return (
    <CaptureItemsContext.Provider value={captureItems}>
      {children}
    </CaptureItemsContext.Provider>
  );
}

export { CaptureItemsContext, CaptureItemsContextProvider };
