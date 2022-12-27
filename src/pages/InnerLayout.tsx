import useAuth from '../useAuth';
import SignInPage from '../SignInPage';
import SignedInPage from '../SignedInPage';

function InnerLayout() {
  const { initialized, user } = useAuth();

  if (!initialized) return <>Loading...</>;
  if (initialized && user === null) return <SignInPage />;

  return <SignedInPage />;
}

export default InnerLayout;
