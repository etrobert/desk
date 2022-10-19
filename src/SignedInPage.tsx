import Capture from './Capture';
import Menu from './Menu';
import Process from './process';
import Engage from './engage';
import HomeButton from './HomeButton';
import LogOutButton from './LogOutButton';
import { Route, Routes } from 'react-router';

function SignedInPage() {
  return (
    <>
      <HomeButton />
      <LogOutButton />
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
