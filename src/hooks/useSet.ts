import { useCallback, useState } from 'react';

const useSet = (defaultValue: string[] = []) => {
  const [set, setSet] = useState<string[]>(defaultValue);

  const add = useCallback(
    (newItem: string) => setSet((set) => [...new Set([...set, newItem])]),
    [],
  );

  const remove = useCallback(
    (itemToRemove: string) =>
      setSet((set) => set.filter((item) => item !== itemToRemove)),
    [],
  );

  return { set, add, remove };
};

export default useSet;
