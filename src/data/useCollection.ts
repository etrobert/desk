import { onSnapshot, Query } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useCollection = <T>(query: Query) => {
  const [items, setItems] = useState<T[] | null>(null);

  useEffect(
    () =>
      onSnapshot(query, (querySnapshot) => {
        const items: T[] = [];
        querySnapshot.forEach((item) => {
          items.push({
            ...item.data(),
            id: item.id,
          } as T);
        });
        setItems(items);
      }),
    [query]
  );

  return items;
};

export default useCollection;
