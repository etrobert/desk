import { signOut } from 'firebase/auth';

import Button from '../components/Button';
import { auth } from '../firebase';

import './LogOutButton.css';

const LogOutButton = () => (
  <Button onClick={() => signOut(auth)} className="LogOutButton">
    Log Out
  </Button>
);

export default LogOutButton;
