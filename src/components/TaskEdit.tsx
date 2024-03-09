'use client';

import { useState } from 'react';

import { Input } from '@/components/ui/input';
import TagInput from './TagInput';
import TagList from './TagList';
import DependenciesList from './DependenciesList';
import DependenciesInput from './DependenciesInput';
import ButtonGroup from './ButtonGroup';
import { Button } from '@/components/ui/button';
import BackButton from './BackButton';

import useSet from '../hooks/useSet';

import type { Task } from '../types';

type Props<T extends Partial<Task>> = {
  task: T;
  onSubmit: (
    task: T & { title: string; tags: string[]; dependencies: string[] },
  ) => void;
};

const TaskEdit = <T extends Partial<Task>>({ task, onSubmit }: Props<T>) => {
  const [title, setTitle] = useState(task.title ?? '');
  const { set: tags, add: addTag, remove: removeTag } = useSet(task.tags);
  const {
    set: dependencies,
    add: addDependency,
    remove: removeDependency,
  } = useSet(task.dependencies);

  return (
    <form
      className="grid grid-cols-[auto_1fr] items-baseline gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        if (title === '') return;
        onSubmit({ ...task, title, tags, dependencies });
      }}
    >
      <label className="justify-self-end" htmlFor="title">
        Title:
      </label>
      <Input
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label className="justify-self-end" htmlFor="new-tag">
        Add Tag:
      </label>
      <TagInput onNewTag={addTag} />
      <label className="justify-self-end">Tags:</label>
      <TagList tags={tags} onTagClick={removeTag} />
      <label className="justify-self-end" htmlFor="new-dependency">
        Add Dependency:
      </label>
      <DependenciesInput addDependency={addDependency} />
      <label className="justify-self-end">Dependencies:</label>
      <DependenciesList
        dependencies={dependencies}
        onDependencyClick={removeDependency}
      />
      <ButtonGroup className="col-start-1 col-end-[-1]">
        <Button type="submit">Confirm</Button>
        <BackButton variant="secondary">Cancel</BackButton>
      </ButtonGroup>
    </form>
  );
};

export default TaskEdit;
