import { useContext } from 'react';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import ButtonLink from './ButtonLink';
import { CaptureItemsContext } from './mocks/CaptureItemsContext';

const Menu = () => {
  const { itemsCount } = useContext(CaptureItemsContext);

  return (
    <>
      <h1>Menu</h1>
      <ButtonGroup>
        <ButtonLink to="capture">Capture</ButtonLink>
        {itemsCount === 0 ? (
          <Button disabled>Process ({itemsCount})</Button>
        ) : (
          <ButtonLink to="process">Process ({itemsCount})</ButtonLink>
        )}
        <ButtonLink to="engage">Engage</ButtonLink>
        <Button disabled>Reflect</Button>
      </ButtonGroup>
    </>
  );
};

export default Menu;
