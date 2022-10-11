import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';

import Actions from './Actions';
import Delegate from './Delegate';
import Delete from './Delete';
import Do from './Do';
import Incubate from './Incubate';
import useLatestCaptureItem from '../useLatestCaptureItem';

const Process = () => {
  const { isLoading, latestCaptureItem } = useLatestCaptureItem();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && latestCaptureItem === null) navigate('/');
  }, [isLoading, latestCaptureItem, navigate]);

  if (isLoading) return <>Loading...</>;

  if (latestCaptureItem === null) return null;

  return (
    <div>
      <h1>Process</h1>
      <p>{latestCaptureItem.value}</p>
      <Routes>
        <Route index element={<Actions />} />
        <Route path="delete" element={<Delete />} />
        <Route path="do" element={<Do />} />
        <Route path="incubate" element={<Incubate />} />
        <Route path="delegate" element={<Delegate />} />
      </Routes>
    </div>
  );
};

export default Process;
