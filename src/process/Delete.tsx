import { useNavigate } from 'react-router';

import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import BackButton from '../BackButton';

const Delete = () => {
  const navigate = useNavigate();

  const onDelete = () => {
    // popItem();
    navigate(-1);
  };

  return (
    <div>
      <h2>Delete?</h2>
      <ButtonGroup>
        <Button disabled onClick={onDelete}>
          Confirm
        </Button>
        <BackButton>Cancel</BackButton>
      </ButtonGroup>
    </div>
  );
};

export default Delete;
