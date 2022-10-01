import Button from '../Button';
import ActionOrCancel from '../ActionOrCancel';

const Do = () => {
  return (
    <div>
      <p>1:59:59</p>
      <ActionOrCancel>
        <Button disabled>Done</Button>
      </ActionOrCancel>
    </div>
  );
};

export default Do;
