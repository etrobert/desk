import { orderBy } from 'firebase/firestore';
import { createContext, ReactNode } from 'react';
import { CaptureItem } from '../../types';
import useUserCollection from '../useUserCollection';

const CaptureItemsContext = createContext<CaptureItem[] | null>(null);

type Props = {
  children: ReactNode;
};

function CaptureItemsContextProvider({ children }: Props) {
  const captureItems = useUserCollection<CaptureItem>(
    ['capture-items'],
    [orderBy('createdAt', 'desc')]
  );

  return (
    <CaptureItemsContext.Provider value={captureItems}>
      {children}
    </CaptureItemsContext.Provider>
  );
}

export { CaptureItemsContext, CaptureItemsContextProvider };
