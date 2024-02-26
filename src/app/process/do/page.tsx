'use client';

import { useRouter } from 'next/navigation';
import Button from '../../../components/Button';
import ButtonGroup from '../../../components/ButtonGroup';
import BackButton from '../../../components/BackButton';
import Countdown from './Countdown';
import useDeleteLatestCaptureItem from '../../../data/capture-items/useDeleteLatestCaptureItem';

const Do = () => {
  const deleteLatestCaptureItem = useDeleteLatestCaptureItem();
  const router = useRouter();

  return (
    <div>
      <Countdown />
      <ButtonGroup>
        <Button
          onClick={() => {
            deleteLatestCaptureItem();
            router.back();
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
