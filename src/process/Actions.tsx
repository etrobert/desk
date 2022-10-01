import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import ButtonLink from '../ButtonLink';

const Actions = () => {
  return (
    <ButtonGroup>
      <ButtonLink to="delete">Delete</ButtonLink>
      <ButtonLink to="do">Do</ButtonLink>
      <ButtonLink to="delegate">Delegate</ButtonLink>
      <Button disabled>Defer</Button>
      <Button disabled>Archive</Button>
      <ButtonLink to="incubate">Incubate</ButtonLink>
    </ButtonGroup>
  );
};

export default Actions;
