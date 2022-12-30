import useAuth from '../useAuth';

import './UserEmail.css';

const UserEmail = () => {
  const { user } = useAuth();
  return user && <p className="UserEmail">{user.email}</p>;
};

export default UserEmail;
