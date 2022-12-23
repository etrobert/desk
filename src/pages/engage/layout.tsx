import { Route, Routes } from 'react-router';

import Task from '../../engage/Task';
import TaskList from '../../engage/TaskList';
import EngageTaskEdit from '../../engage/EngageTaskEdit';

const EngageLayout = () => (
  <>
    <h1>Engage</h1>
    <Routes>
      <Route path="/:id/edit" element={<EngageTaskEdit />} />
      <Route path="/:id" element={<Task />} />
      <Route index element={<TaskList />} />
    </Routes>
  </>
);

export default EngageLayout;
