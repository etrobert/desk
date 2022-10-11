import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import ButtonLink from '../ButtonLink';

const Actions = () => {
  return (
    <ButtonGroup>
      <ButtonLink to="delete">Delete</ButtonLink>
      <ButtonLink to="do">Do</ButtonLink>
      <Button disabled>Delegate</Button>
      <ButtonLink to="defer">Defer</ButtonLink>
      <Button disabled>Archive</Button>
      <Button disabled>Incubate</Button>
    </ButtonGroup>
  );
};

export default Actions;
