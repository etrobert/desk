import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import BackButton from '../BackButton';

const Incubate = () => {
  return (
    <form>
      <p>When do you want this item to resurface?</p>
      <input type="date" />
      <ButtonGroup>
        <Button disabled type="submit">
          Incubate
        </Button>
        <BackButton>Cancel</BackButton>
      </ButtonGroup>
    </form>
  );
};

export default Incubate;
