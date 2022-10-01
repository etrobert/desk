import { Route, Routes } from 'react-router';

import items from '../items';

import Actions from './Actions';
import Delete from './Delete';
import Do from './Do';

const Process = () => {
  return (
    <div>
      <h1>Process</h1>
      <p>{items[0]}</p>
      <Routes>
        <Route index element={<Actions />} />
        <Route path="delete" element={<Delete />} />
        <Route path="do" element={<Do />} />
      </Routes>
    </div>
  );
};

export default Process;
