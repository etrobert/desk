import Button from '../Button';
import ButtonLink from '../ButtonLink';

import './Actions.css';

const Actions = () => {
  return (
    <ul className="ProcessActions">
      <li>
        <ButtonLink to="delete">Delete</ButtonLink>
      </li>
      <li>
        <ButtonLink to="do">Do</ButtonLink>
      </li>
      <li>
        <Button disabled>Delegate</Button>
      </li>
      <li>
        <Button disabled>Defer</Button>
      </li>
      <li>
        <Button disabled>Archive</Button>
      </li>
      <li>
        <Button disabled>Incubate</Button>
      </li>
    </ul>
  );
};

export default Actions;
