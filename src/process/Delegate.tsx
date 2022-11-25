import Button from '../components/Button';

import './Delegate.css';
import ButtonGroup from '../components/ButtonGroup';
import BackButton from '../components/BackButton';

const Delegate = () => (
  <form className="ProcessDelegate">
    <label>
      Assignee: <input />
    </label>
    <label>
      Due: <input type="date" />
    </label>
    <ButtonGroup>
      <Button disabled type="submit">
        Delegate
      </Button>
      <BackButton>Cancel</BackButton>
    </ButtonGroup>
  </form>
);

export default Delegate;