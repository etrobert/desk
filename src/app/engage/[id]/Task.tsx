import { redirect } from 'next/navigation';
import BackButton from '../../../components/BackButton';
import { Button } from '@/components/ui/button';
import ButtonLink from '../../../components/ButtonLink';
import ButtonGroup from '../../../components/ButtonGroup';
import TagList from '../../../components/TagList';
import DependenciesList from '@/components/DependenciesList';
import fetchTask from '@/db/fetchTask';
import { Task } from '@/db/schema';
import DeleteTaskButton from './DeleteTaskButton';

type Props = {
  id: number;
};

const Tags = ({ tags }: { tags: string[] }) => {
  if (tags.length === 0) return null;
  return (
    <>
      <label>Tags:</label>
      <TagList tags={tags} />
    </>
  );
};

const Dependencies = ({ dependencies }: { dependencies: Task[] }) => {
  if (dependencies.length === 0) return null;
  return (
    <>
      <label>Dependencies:</label>
      {/* <DependenciesList dependencies={dependencies} /> */}
      {/* TODO: Remove this */}
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
  // const updateTask = useUpdateTask();

  if (task === undefined) redirect('/');

  const { title, dependencies } = task;

  return (
    <>
      <div className="grid gap-4">
        <p>{title}</p>
        <div className="grid grid-cols-[auto_1fr] items-baseline gap-2">
          {/* <Tags tags={tags} /> */}
          <Dependencies dependencies={dependencies} />
        </div>
        <ButtonGroup>
          <Button
            variant="secondary"
            // onClick={() => updateTask({ ...task, status: 'done' })}
          >
            Done
          </Button>
          <ButtonLink href={`${id}/edit`}>Edit</ButtonLink>
          <DeleteTaskButton id={id} />
          <BackButton variant="secondary">Back</BackButton>
        </ButtonGroup>
      </div>
    </>
  );
};

export default TaskComponent;
