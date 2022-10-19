import { useEffect } from 'react';
import useAuth from './useAuth';
import Login from './Login';

import SignedInPage from './SignedInPage';

function LandingPage() {
  const { initialized, user } = useAuth();
  useEffect(() => console.log(user));

  if (!initialized) return <>Loading...</>;
  if (initialized && user === null) return <Login />;

  return <SignedInPage />;
}

export default LandingPage;
