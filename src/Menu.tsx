import ButtonLink from './ButtonLink';

const Menu = () => {
  return (
    <ul>
      <li>
        <ButtonLink to="capture">Capture</ButtonLink>
      </li>
      <li>
        <ButtonLink to="process">Process</ButtonLink>
      </li>
    </ul>
  );
};

export default Menu;
