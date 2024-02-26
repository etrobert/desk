'use client';

import Button from '../components/Button';
import ButtonGroup from '../components/ButtonGroup';
import ButtonLink from '../components/ButtonLink';
import useCaptureItemsCount from '../data/capture-items/useCaptureItemsCount';
import useTasks from '../data/tasks/useTasks';

const Menu = () => {
  const itemsCount = useCaptureItemsCount();
  const tasks = useTasks();

  if (itemsCount === null) return <>Loading...</>;

  return (
    <>
      <h1>Menu</h1>
      <ButtonGroup>
        <ButtonLink href="capture">Capture</ButtonLink>
        {itemsCount === 0 ? (
          <Button disabled>Process ({itemsCount})</Button>
        ) : (
          <ButtonLink href="process">Process ({itemsCount})</ButtonLink>
        )}
        {tasks?.length === 0 ? (
          <Button disabled>Engage</Button>
        ) : (
          <ButtonLink href="engage">Engage</ButtonLink>
        )}
        {tasks?.length === 0 ? (
          <Button disabled>Reflect</Button>
        ) : (
          <ButtonLink href="reflect">Reflect</ButtonLink>
        )}
      </ButtonGroup>
    </>
  );
};

export default Menu;
