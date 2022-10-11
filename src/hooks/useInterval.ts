import { useEffect } from 'react';

const useInterval = (callback: () => void, ms: number, enabled = true) => {
  useEffect(() => {
    if (!enabled) return;
    const id = setInterval(callback, ms);
    return () => clearInterval(id);
  }, [callback, enabled, ms]);
};

export default useInterval;
