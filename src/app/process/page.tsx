'use client';

import ButtonGroup from '../../components/ButtonGroup';
import { Button } from '@/components/ui/button';
import ButtonLink from '../../components/ButtonLink';
import useDeleteLatestCaptureItem from '../../data/capture-items/useDeleteLatestCaptureItem';

const Actions = () => {
  const deleteLatestCaptureItem = useDeleteLatestCaptureItem();

  return (
    <ButtonGroup>
      <Button onClick={deleteLatestCaptureItem}>Delete</Button>
      <ButtonLink href="process/do">Do</ButtonLink>
      <Button disabled>Delegate</Button>
      <ButtonLink href="process/defer">Defer</ButtonLink>
      <Button disabled>Archive</Button>
      <Button disabled>Incubate</Button>
    </ButtonGroup>
  );
};

export default Actions;
