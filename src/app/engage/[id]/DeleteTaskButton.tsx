'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import deleteTask from '@/db/deleteTask';

const DeleteTaskButton = ({ id }: { id: number }) => {
  const router = useRouter();

  return (
    <Button
      onClick={async () => {
        await deleteTask(id);
        router.back();
      }}
      variant="outline"
    >
      Delete
    </Button>
  );
};

export default DeleteTaskButton;
