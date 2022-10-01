import { Route, Routes } from 'react-router';

import items from '../mocks/items';

import Actions from './Actions';
import Delegate from './Delegate';
import Delete from './Delete';
import Do from './Do';
import Incubate from './Incubate';

const Process = () => (
  <div>
    <h1>Process</h1>
    <p>{items[0]}</p>
    <Routes>
      <Route index element={<Actions />} />
      <Route path="delete" element={<Delete />} />
      <Route path="do" element={<Do />} />
      <Route path="incubate" element={<Incubate />} />
      <Route path="delegate" element={<Delegate />} />
    </Routes>
  </div>
);

export default Process;
