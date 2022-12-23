import { Route, Routes } from 'react-router';

import Task from '../../engage/Task';
import EngagePage from './page';
import EngageTaskEdit from '../../engage/EngageTaskEdit';

const EngageLayout = () => (
  <>
    <h1>Engage</h1>
    <Routes>
      <Route path="/:id/edit" element={<EngageTaskEdit />} />
      <Route path="/:id" element={<Task />} />
      <Route index element={<EngagePage />} />
    </Routes>
  </>
);

export default EngageLayout;
