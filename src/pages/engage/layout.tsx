import { Route, Routes } from 'react-router';

import TaskPage from './[id]/page';
import EngagePage from './page';
import EngageTaskEdit from '../../engage/EngageTaskEdit';

const EngageLayout = () => (
  <>
    <h1>Engage</h1>
    <Routes>
      <Route path="/:id/edit" element={<EngageTaskEdit />} />
      <Route path="/:id" element={<TaskPage />} />
      <Route index element={<EngagePage />} />
    </Routes>
  </>
);

export default EngageLayout;
