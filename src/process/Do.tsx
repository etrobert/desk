import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import BackButton from '../BackButton';
import Countdown from './Countdown';

const Do = () => {
  return (
    <div>
      <Countdown />
      <ButtonGroup>
        <Button disabled>Done</Button>
        <BackButton>Cancel</BackButton>
      </ButtonGroup>
    </div>
  );
};

export default Do;
