import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import BackButton from '../BackButton';

const Do = () => {
  return (
    <div>
      <p>1:59:59</p>
      <ButtonGroup>
        <Button disabled>Done</Button>
        <BackButton>Cancel</BackButton>
      </ButtonGroup>
    </div>
  );
};

export default Do;
