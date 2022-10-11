import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import BackButton from '../BackButton';
import Countdown from './Countdown';
import useDeleteLatestCaptureItem from '../data/capture-items/useDeleteLatestCaptureItem';
import { useNavigate } from 'react-router';

const Do = () => {
  const deleteLatestCaptureItem = useDeleteLatestCaptureItem();
  const navigate = useNavigate();

  return (
    <div>
      <Countdown />
      <ButtonGroup>
        <Button
          onClick={() => {
            deleteLatestCaptureItem();
            navigate(-1);
          }}
        >
          Done
        </Button>
        <BackButton>Cancel</BackButton>
      </ButtonGroup>
    </div>
  );
};

export default Do;
