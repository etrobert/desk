import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import ButtonLink from '../ButtonLink';
import useDeleteLatestCaptureItem from '../data/capture-items/useDeleteLatestCaptureItem';

const Actions = () => {
  const deleteLatestCaptureItem = useDeleteLatestCaptureItem();

  return (
    <ButtonGroup>
      <Button onClick={deleteLatestCaptureItem}>Delete</Button>
      <ButtonLink to="do">Do</ButtonLink>
      <Button disabled>Delegate</Button>
      <ButtonLink to="defer">Defer</ButtonLink>
      <Button disabled>Archive</Button>
      <Button disabled>Incubate</Button>
    </ButtonGroup>
  );
};

export default Actions;
