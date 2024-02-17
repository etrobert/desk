import { useCallback, useState } from 'react';

const useSet = () => {
  const [set, setSet] = useState<string[]>([]);

  const add = useCallback(
    (newItem: string) => setSet((set) => [...new Set([...set, newItem])]),
    []
  );

  const remove = useCallback(
    (itemToRemove: string) =>
      setSet((set) => set.filter((item) => item !== itemToRemove)),
    []
  );

  return { set, add, remove };
};

export default useSet;
