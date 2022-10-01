import { Link } from 'react-router-dom';

const Actions = () => {
  return (
    <>
      <Link to="delete">Delete</Link>
      <button disabled>Do</button>
      <button disabled>Delegate</button>
      <button disabled>Defer</button>
      <button disabled>Archive</button>
      <button disabled>Incubate</button>
    </>
  );
};

export default Actions;
