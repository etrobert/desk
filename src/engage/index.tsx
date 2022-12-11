import { Route, Routes } from 'react-router';

import Task from './Task';
import TaskList from './TaskList';
import EngageTaskEdit from './EngageTaskEdit';

const Engage = () => (
  <>
    <h1>Engage</h1>
    <Routes>
      <Route path="/:id/edit" element={<EngageTaskEdit />} />
      <Route path="/:id" element={<Task />} />
      <Route index element={<TaskList />} />
    </Routes>
  </>
);

export default Engage;
