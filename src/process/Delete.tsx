import Button from '../Button';
import ButtonLink from '../ButtonLink';

const Delete = () => {
  return (
    <div>
      <h2>Delete?</h2>
      <Button>Confirm</Button>
      <ButtonLink to="..">Cancel</ButtonLink>
    </div>
  );
};

export default Delete;
