import Button from '../Button';
import ButtonLink from '../ButtonLink';

const Actions = () => {
  return (
    <>
      <ButtonLink to="delete">Delete</ButtonLink>
      <ButtonLink to="do">Do</ButtonLink>
      <Button>Delegate</Button>
      <Button disabled>Defer</Button>
      <Button disabled>Archive</Button>
      <Button disabled>Incubate</Button>
    </>
  );
};

export default Actions;
