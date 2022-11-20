import { Route, Routes } from 'react-router';

import { CaptureItemsContextProvider } from './data/capture-items/CaptureItemsContext';
import { TasksContextProvider } from './data/tasks/TasksContext';
import Capture from './Capture';
import Menu from './Menu';
import Process from './process';
import Engage from './engage';
import HomeButton from './HomeButton';
import LogOutButton from './LogOutButton';
import UserEmail from './UserEmail';

function SignedInPage() {
  return (
    <CaptureItemsContextProvider>
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
    </CaptureItemsContextProvider>
  );
}

export default SignedInPage;
