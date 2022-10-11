import Button from './Button';
import ButtonGroup from './ButtonGroup';
import ButtonLink from './ButtonLink';
import useCaptureItemsCount from './data/capture-items/useCaptureItemsCount';

const Menu = () => {
  const itemsCount = useCaptureItemsCount();

  if (itemsCount === null) return <>Loading...</>;

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
