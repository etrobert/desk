import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to="capture">Capture</Link>
      </li>
      <li>
        <Link to="process">Process</Link>
      </li>
    </ul>
  );
};

export default Menu;
