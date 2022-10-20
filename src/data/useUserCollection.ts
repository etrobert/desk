import { collection, query, QueryConstraint } from 'firebase/firestore';
import { useMemo } from 'react';
import { firestore } from '../firebase';
import useAuth from '../useAuth';
import useCollection from './useCollection';

const useUserCollection = <T>(
  path: string[],
  queryConstraints: QueryConstraint[]
) => {
  const { user } = useAuth();

  const q = useMemo(
    () =>
      user &&
      query(
        collection(firestore, 'users', user.uid, ...path),
        ...queryConstraints
      ),
    [user, path, queryConstraints]
  );

  return useCollection<T>(q);
};

export default useUserCollection;
