import { collection, orderBy, query } from 'firebase/firestore';
import { createContext, ReactNode, useMemo } from 'react';
import useCollection from '../useCollection';
import { firestore } from '../../firebase';
import { CaptureItem } from '../../types';
import useAuth from '../../useAuth';

const CaptureItemsContext = createContext<CaptureItem[] | null>(null);

type Props = {
  children: ReactNode;
};

function CaptureItemsContextProvider({ children }: Props) {
  const { user } = useAuth();
  const q = useMemo(
    () =>
      user === null
        ? null
        : query(
            collection(firestore, 'users', user.uid, 'capture-items'),
            orderBy('createdAt', 'desc')
          ),
    [user]
  );
  const captureItems = useCollection<CaptureItem>(q);

  return (
    <CaptureItemsContext.Provider value={captureItems}>
      {children}
    </CaptureItemsContext.Provider>
  );
}

export { CaptureItemsContext, CaptureItemsContextProvider };
