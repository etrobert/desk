import Button from '../Button';
import ActionOrCancel from '../ActionOrCancel';

const Delete = () => {
  return (
    <div>
      <h2>Delete?</h2>
      <ActionOrCancel>
        <Button disabled>Confirm</Button>
      </ActionOrCancel>
    </div>
  );
};

export default Delete;
