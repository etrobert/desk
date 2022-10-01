import Button from '../Button';
import ActionOrCancel from '../ActionOrCancel';

import './Delegate.css';

const Delegate = () => (
  <form className="ProcessDelegate">
    <label>
      Assignee: <input />
    </label>
    <label>
      Due: <input type="date" />
    </label>
    <ActionOrCancel>
      <Button disabled type="submit">
        Delegate
      </Button>
    </ActionOrCancel>
  </form>
);

export default Delegate;
