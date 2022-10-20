import { onSnapshot, Query } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useCollection = <T>(query: Query | null) => {
  const [items, setItems] = useState<T[] | null>(null);

  useEffect(() => {
    if (query === null) return;
    return onSnapshot(query, (querySnapshot) => {
      const items: T[] = [];
      querySnapshot.forEach((item) => {
        items.push({
          ...item.data(),
          id: item.id,
        } as T);
      });
      setItems(items);
    });
  }, [query]);

  return items;
};

export default useCollection;
