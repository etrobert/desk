import ButtonGroup from './ButtonGroup';
import ButtonLink from './ButtonLink';

const Menu = () => {
  return (
    <ButtonGroup>
      <ButtonLink to="capture">Capture</ButtonLink>
      <ButtonLink to="process">Process</ButtonLink>
    </ButtonGroup>
  );
};

export default Menu;
