import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import ButtonLink from '../ButtonLink';

import './Delegate.css';

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
      <ButtonLink to="..">Cancel</ButtonLink>
    </ButtonGroup>
  </form>
);

export default Delegate;
