import { useState } from 'react';
import useInterval from './useInterval';

const useCountdown = (from: number) => {
  const [time, setTime] = useState(from);
  useInterval(() => setTime((time) => time - 1), 1000, time > 0);
  return time;
};

export default useCountdown;
