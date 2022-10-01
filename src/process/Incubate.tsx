import Button from '../Button';
import ActionOrCancel from '../ActionOrCancel';

const Incubate = () => {
  return (
    <form>
      <p>When do you want this item to resurface?</p>
      <input type="date" />
      <ActionOrCancel>
        <Button disabled type="submit">
          Incubate
        </Button>
      </ActionOrCancel>
    </form>
  );
};

export default Incubate;
