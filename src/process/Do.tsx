import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import ButtonLink from '../ButtonLink';

const Do = () => {
  return (
    <div>
      <p>1:59:59</p>
      <ButtonGroup>
        <Button disabled>Done</Button>
        <ButtonLink to="..">Cancel</ButtonLink>
      </ButtonGroup>
    </div>
  );
};

export default Do;
