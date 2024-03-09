import useAuth from '../useAuth';

const UserEmail = () => {
  const { user } = useAuth();
  return (
    user && (
      <p className="UserEmail absolute bottom-0 right-0 m-4">{user.email}</p>
    )
  );
};

export default UserEmail;
