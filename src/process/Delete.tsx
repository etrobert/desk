import { Link } from 'react-router-dom';

const Delete = () => {
  return (
    <div>
      <h2>Delete?</h2>
      <button>Confirm</button>
      <Link to="..">Cancel</Link>
    </div>
  );
};

export default Delete;
