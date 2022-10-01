import { Link } from 'react-router-dom';

const Do = () => {
  return (
    <div>
      <p>1:59:59</p>
      <button>Done</button>
      <Link to="..">Cancel</Link>
    </div>
  );
};

export default Do;
