import Button from './Button';
import ButtonGroup from './ButtonGroup';
import ButtonLink from './ButtonLink';

const Menu = () => {
  return (
    <>
      <h1>Menu</h1>
      <ButtonGroup>
        <ButtonLink to="capture">Capture</ButtonLink>
        <ButtonLink to="process">Process</ButtonLink>
        <ButtonLink to="engage">Engage</ButtonLink>
        <Button disabled>Reflect</Button>
      </ButtonGroup>
    </>
  );
};

export default Menu;
