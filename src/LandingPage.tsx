import { useEffect } from 'react';
import useAuth from './useAuth';
import SignInPage from './SignInPage';

import SignedInPage from './SignedInPage';

function LandingPage() {
  const { initialized, user } = useAuth();
  useEffect(() => console.log(user));

  if (!initialized) return <>Loading...</>;
  if (initialized && user === null) return <SignInPage />;

  return <SignedInPage />;
}

export default LandingPage;
