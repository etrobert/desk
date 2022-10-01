import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import ButtonLink from '../ButtonLink';

const Delete = () => {
  return (
    <div>
      <h2>Delete?</h2>
      <ButtonGroup>
        <Button disabled>Confirm</Button>
        <ButtonLink to="..">Cancel</ButtonLink>
      </ButtonGroup>
    </div>
  );
};

export default Delete;
