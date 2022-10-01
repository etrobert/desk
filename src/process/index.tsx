import { useContext } from 'react';
import { Route, Routes } from 'react-router';

import { CaptureItemsContext } from '../mocks/CaptureItemsContext';

import Actions from './Actions';
import Delegate from './Delegate';
import Delete from './Delete';
import Do from './Do';
import Incubate from './Incubate';

const Process = () => {
  const { latestItem } = useContext(CaptureItemsContext);
  return (
    <div>
      <h1>Process</h1>
      <p>{latestItem}</p>
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
