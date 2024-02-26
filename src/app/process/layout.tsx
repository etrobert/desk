'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import useLatestCaptureItem from '../../data/capture-items/useLatestCaptureItem';

import type { PropsWithChildren } from 'react';

const Process = ({ children }: PropsWithChildren) => {
  const { isLoading, latestCaptureItem } = useLatestCaptureItem();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && latestCaptureItem === null) router.push('/');
  }, [isLoading, latestCaptureItem, router]);

  if (isLoading) return <>Loading...</>;

  if (latestCaptureItem === null) return null;

  return (
    <div>
      <h1>Process</h1>
      <p>{latestCaptureItem.value}</p>
      {children}
    </div>
  );
};

export default Process;
