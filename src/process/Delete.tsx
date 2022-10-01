import { useContext } from 'react';
import { useNavigate } from 'react-router';

import Button from '../Button';
import ActionOrCancel from '../ActionOrCancel';
import { CaptureItemsContext } from '../mocks/CaptureItemsContext';

const Delete = () => {
  const navigate = useNavigate();
  const { popItem } = useContext(CaptureItemsContext);

  const onDelete = () => {
    popItem();
    navigate('..');
  };

  return (
    <div>
      <h2>Delete?</h2>
      <ActionOrCancel>
        <Button onClick={onDelete}>Confirm</Button>
      </ActionOrCancel>
    </div>
  );
};

export default Delete;
