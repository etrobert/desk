import { Route, Routes } from 'react-router';

import Capture from './Capture';
import Menu from './Menu';
import Process from './process';
import Engage from './engage';
import HomeButton from './HomeButton';
import LogOutButton from './LogOutButton';
import UserEmail from './UserEmail';

function SignedInPage() {
  return (
    <>
      <HomeButton />
      <LogOutButton />
      <UserEmail />
      <Routes>
        <Route path="capture" element={<Capture />} />
        <Route path="process/*" element={<Process />} />
        <Route path="engage/*" element={<Engage />} />
        <Route path="*" element={<Menu />} />
      </Routes>
    </>
  );
}

export default SignedInPage;
