import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';

import Actions from '../../process/Actions';
import Delegate from '../../process/Delegate';
import Do from './do/page';
import Incubate from '../../process/Incubate';
import Defer from '../../process/Defer';

import useLatestCaptureItem from '../../data/capture-items/useLatestCaptureItem';

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
        <Route path="do" element={<Do />} />
        <Route path="incubate" element={<Incubate />} />
        <Route path="delegate" element={<Delegate />} />
        <Route
          path="defer"
          element={<Defer captureItem={latestCaptureItem} />}
        />
      </Routes>
    </div>
  );
};

export default Process;
