import { signOut } from 'firebase/auth';

import Button from '../components/Button';
import { auth } from '../firebase';

const LogOutButton = () => (
  <Button onClick={() => signOut(auth)} className="absolute right-0 top-0 m-4">
    Log Out
  </Button>
);

export default LogOutButton;
