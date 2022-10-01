import { Route, Routes } from 'react-router';

import items from './items';

import Delete from './Delete';
import ProcessIndex from './ProcessIndex';

const Process = () => {
  return (
    <div>
      <h1>Process</h1>
      <p>{items[0]}</p>
      <Routes>
        <Route index element={<ProcessIndex />} />
        <Route path="delete" element={<Delete />} />
      </Routes>
    </div>
  );
};

export default Process;
