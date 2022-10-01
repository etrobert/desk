import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import ButtonLink from '../ButtonLink';

const Incubate = () => {
  return (
    <form>
      <p>When do you want this item to resurface?</p>
      <input type="date" />
      <ButtonGroup>
        <Button disabled type="submit">
          Incubate
        </Button>
        <ButtonLink to="..">Cancel</ButtonLink>
      </ButtonGroup>
    </form>
  );
};

export default Incubate;
