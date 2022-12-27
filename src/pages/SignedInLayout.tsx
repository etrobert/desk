import { Route, Routes } from 'react-router';

import { CaptureItemsContextProvider } from '../data/capture-items/CaptureItemsContext';
import { TasksContextProvider } from '../data/tasks/TasksContext';
import { TasksFiltersContextProvider } from '../data/tasks/TasksFiltersContext';
import Capture from './capture/page';
import Engage from './engage/layout';
import Process from './process/layout';
import Menu from '../Menu';
import HomeButton from '../HomeButton';
import LogOutButton from '../LogOutButton';
import UserEmail from '../UserEmail';

function SignedInLayout() {
  return (
    <CaptureItemsContextProvider>
      <TasksFiltersContextProvider>
        <TasksContextProvider>
          <HomeButton />
          <LogOutButton />
          <UserEmail />
          <Routes>
            <Route path="capture" element={<Capture />} />
            <Route path="process/*" element={<Process />} />
            <Route path="engage/*" element={<Engage />} />
            <Route path="*" element={<Menu />} />
          </Routes>
        </TasksContextProvider>
      </TasksFiltersContextProvider>
    </CaptureItemsContextProvider>
  );
}

export default SignedInLayout;
