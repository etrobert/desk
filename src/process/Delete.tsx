import ButtonLink from '../ButtonLink';

const Delete = () => {
  return (
    <div>
      <h2>Delete?</h2>
      <button>Confirm</button>
      <ButtonLink to="..">Cancel</ButtonLink>
    </div>
  );
};

export default Delete;
