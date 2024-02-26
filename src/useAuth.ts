'use client';

import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { auth as firebaseAuth } from './firebase';

type Auth = {
  initialized: boolean;
  user: User | null;
};

const useAuth = () => {
  const [auth, setAuth] = useState<Auth>({ initialized: false, user: null });
  useEffect(
    () =>
      onAuthStateChanged(firebaseAuth, (user) =>
        setAuth({ initialized: true, user })
      ),
    []
  );
  return auth;
};

export default useAuth;
