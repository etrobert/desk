'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import deleteTaskAction from '@/actions/deleteTaskAction';

const DeleteTaskButton = ({ id }: { id: number }) => {
  const router = useRouter();

  return (
    <Button
      onClick={async () => {
        await deleteTaskAction(id);
        router.back();
      }}
      variant="outline"
    >
      Delete
    </Button>
  );
};

export default DeleteTaskButton;
