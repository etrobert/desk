import { createContext, ReactNode, useCallback, useState } from 'react';

type CaptureItemsContextValue = {
  addItem: (newItem: string) => void;
  popItem: () => void;
  latestItem: string | undefined;
  itemsCount: number;
};

const initialValue = {
  addItem: () => {},
  popItem: () => {},
  latestItem: undefined,
  itemsCount: 0,
};

const CaptureItemsContext =
  createContext<CaptureItemsContextValue>(initialValue);

type Props = {
  children: ReactNode;
};

const CaptureItemsContextProvider = ({ children }: Props) => {
  const [items, setItems] = useState<string[]>([]);

  const latestItem = items.length === 0 ? undefined : items[0];

  const addItem = useCallback(
    (newItem: string) => setItems((value) => [newItem, ...value]),
    []
  );

  const popItem = useCallback(
    () => setItems(([latestItem, ...rest]) => rest),
    []
  );

  const itemsCount = items.length;

  return (
    <CaptureItemsContext.Provider
      value={{ latestItem, addItem, popItem, itemsCount }}
    >
      {children}
    </CaptureItemsContext.Provider>
  );
};

export { CaptureItemsContext, CaptureItemsContextProvider };
