'use client';

import ButtonGroup from '../../components/ButtonGroup';
import { Button } from '@/components/ui/button';
import ButtonLink from '../../components/ButtonLink';
import useDeleteLatestCaptureItem from '../../data/capture-items/useDeleteLatestCaptureItem';

const Actions = () => {
  const deleteLatestCaptureItem = useDeleteLatestCaptureItem();

  return (
    <ButtonGroup>
      <Button variant="secondary" onClick={deleteLatestCaptureItem}>
        Delete
      </Button>
      <ButtonLink href="process/do">Do</ButtonLink>
      <Button variant="secondary" disabled>
        Delegate
      </Button>
      <ButtonLink href="process/defer">Defer</ButtonLink>
      <Button variant="secondary" disabled>
        Archive
      </Button>
      <Button variant="secondary" disabled>
        Incubate
      </Button>
    </ButtonGroup>
  );
};

export default Actions;
