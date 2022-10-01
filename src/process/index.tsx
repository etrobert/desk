import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';

import useCaptureItems from '../useCaptureItems';

import Actions from './Actions';
import Delegate from './Delegate';
import Delete from './Delete';
import Do from './Do';
import Incubate from './Incubate';

const Process = () => {
  const captureItems = useCaptureItems();

  const navigate = useNavigate();

  useEffect(() => {
    if (captureItems !== null && captureItems.length === 0) navigate('/');
  }, [captureItems, navigate]);

  if (captureItems === null) return <>Loading...</>;

  // TODO: Handle the empty array case
  const latestItem = captureItems[0];

  return (
    <div>
      <h1>Process</h1>
      <p>{latestItem.value}</p>
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
