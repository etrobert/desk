import { useMemo } from 'react';
import useAuth from '../useAuth';

const useUserPath = () => {
  const { user } = useAuth();

  return useMemo(() => user && (['users', user.uid] as const), [user]);
};

export default useUserPath;
