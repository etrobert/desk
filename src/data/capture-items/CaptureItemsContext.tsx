'use client';

import { orderBy } from 'firebase/firestore';
import { createContext, ReactNode } from 'react';
import { CaptureItem } from '../../types';
import useUserCollection from '../useUserCollection';

const CaptureItemsContext = createContext<CaptureItem[] | null>(null);

type Props = {
  children: ReactNode;
};

const path = ['capture-items'];
const queryConstraints = [orderBy('createdAt', 'desc')];

function CaptureItemsContextProvider({ children }: Props) {
  const captureItems = useUserCollection<CaptureItem>(path, queryConstraints);

  return (
    <CaptureItemsContext.Provider value={captureItems}>
      {children}
    </CaptureItemsContext.Provider>
  );
}

export { CaptureItemsContext, CaptureItemsContextProvider };
