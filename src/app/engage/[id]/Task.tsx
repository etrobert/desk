import { redirect } from 'next/navigation';
import BackButton from '../../../components/BackButton';
import { Button } from '@/components/ui/button';
import ButtonLink from '../../../components/ButtonLink';
import ButtonGroup from '../../../components/ButtonGroup';
import fetchTask from '@/db/fetchTask';
import { Task } from '@/db/schema';
import DeleteTaskButton from './DeleteTaskButton';

type Props = {
  id: number;
};

const Dependencies = ({ dependencies }: { dependencies: Task[] }) => {
  if (dependencies.length === 0) return null;
  return (
    <>
      <label>Dependencies:</label>
      <ul>
        {dependencies.map(({ id, title }) => (
          <Button variant="outline" key={id}>
            {title}
          </Button>
        ))}
      </ul>
    </>
  );
};

const TaskComponent = async ({ id }: Props) => {
  const task = await fetchTask(id);

  if (task === undefined) redirect('/');

  const { title, dependencies } = task;

  return (
    <>
      <div className="grid gap-4">
        <p>{title}</p>
        <div className="grid grid-cols-[auto_1fr] items-baseline gap-2">
          <Dependencies dependencies={dependencies} />
        </div>
        <ButtonGroup>
          <Button variant="secondary">Done</Button>
          <ButtonLink href={`${id}/edit`}>Edit</ButtonLink>
          <DeleteTaskButton id={id} />
          <BackButton variant="secondary">Back</BackButton>
        </ButtonGroup>
      </div>
    </>
  );
};

export default TaskComponent;
