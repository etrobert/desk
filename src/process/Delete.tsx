import { useNavigate } from 'react-router';

import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import BackButton from '../BackButton';
import useDeleteLatestCaptureItem from '../data/useDeleteLatestCaptureItem';

const Delete = () => {
  const navigate = useNavigate();
  const deleteLatestCaptureItem = useDeleteLatestCaptureItem();

  const onDelete = () => {
    deleteLatestCaptureItem();
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
