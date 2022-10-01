import { useContext } from 'react';
import { useNavigate } from 'react-router';

import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import BackButton from '../BackButton';
import { CaptureItemsContext } from '../mocks/CaptureItemsContext';

const Delete = () => {
  const navigate = useNavigate();
  const { popItem } = useContext(CaptureItemsContext);

  const onDelete = () => {
    popItem();
    navigate(-1);
  };

  return (
    <div>
      <h2>Delete?</h2>
      <ButtonGroup>
        <Button onClick={onDelete}>Confirm</Button>
        <BackButton>Cancel</BackButton>
      </ButtonGroup>
    </div>
  );
};

export default Delete;
