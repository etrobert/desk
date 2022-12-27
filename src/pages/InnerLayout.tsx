import useAuth from '../useAuth';
import SignInPage from '../SignInPage';
import SignedInLayout from './SignedInLayout';

function InnerLayout() {
  const { initialized, user } = useAuth();

  if (!initialized) return <>Loading...</>;
  if (initialized && user === null) return <SignInPage />;

  return <SignedInLayout />;
}

export default InnerLayout;
