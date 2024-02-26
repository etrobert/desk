'use client';

import useAuth from '../useAuth';
import SignInPage from './SignInPage';
import SignedInLayout from './SignedInLayout';

import type { PropsWithChildren } from 'react';

function InnerLayout({ children }: PropsWithChildren) {
  const { initialized, user } = useAuth();

  if (!initialized) return <>Loading...</>;
  if (initialized && user === null) return <SignInPage />;

  return <SignedInLayout>{children}</SignedInLayout>;
}

export default InnerLayout;
