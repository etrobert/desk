import { collection, query, QueryConstraint } from 'firebase/firestore';
import { useMemo } from 'react';
import { firestore } from '../firebase';
import useUserPath from './useUserPath';
import useCollection from './useCollection';

const useUserCollection = <T>(
  path: string[],
  queryConstraints: QueryConstraint[]
) => {
  const userPath = useUserPath();

  const q = useMemo(
    () =>
      userPath &&
      query(collection(firestore, ...userPath, ...path), ...queryConstraints),
    [userPath, path, queryConstraints]
  );

  return useCollection<T>(q);
};

export default useUserCollection;
