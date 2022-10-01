import ButtonLink from '../ButtonLink';

const Actions = () => {
  return (
    <>
      <ButtonLink to="delete">Delete</ButtonLink>
      <ButtonLink to="do">Do</ButtonLink>
      <button disabled>Delegate</button>
      <button disabled>Defer</button>
      <button disabled>Archive</button>
      <button disabled>Incubate</button>
    </>
  );
};

export default Actions;
