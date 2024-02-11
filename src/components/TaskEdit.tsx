import { useEffect, useState } from 'react';

import TextInput from './TextInput';
import TagInput from './TagInput';
import TagList from './TagList';
import DependenciesInput from './DependenciesInput';
import ButtonGroup from './ButtonGroup';
import Button from './Button';
import BackButton from './BackButton';

import useSet from '../hooks/useSet';

import type { Task } from '../types';

import './TaskEdit.css';

type Props<T extends Partial<Task>> = {
  task: T;
  onSubmit: (task: T & { title: string; tags: string[] }) => void;
};

const TaskEdit = <T extends Partial<Task>>({ task, onSubmit }: Props<T>) => {
  const [title, setTitle] = useState(task.title ?? '');
  const { set: tags, add: addTag, remove: removeTag } = useSet();
  const {
    set: dependencies,
    add: addDependency,
    remove: removeDependency,
  } = useSet();

  // TODO: Remove
  useEffect(() => {
    console.log(dependencies);
  }, [dependencies]);

  return (
    <form
      className="TaskEdit__Form"
      onSubmit={(event) => {
        event.preventDefault();
        if (title === '') return;
        onSubmit({ ...task, title, tags });
      }}
    >
      <label className="TaskEdit__Label" htmlFor="title">
        Title:
      </label>
      <TextInput
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label className="TaskEdit__Label" htmlFor="new-tag">
        Add Tag:
      </label>
      <TagInput onNewTag={addTag} />
      <label className="TaskEdit__Label">Tags:</label>
      <TagList tags={tags} onTagClick={removeTag} />
      <label className="TaskEdit__Label" htmlFor="new-dependency">
        Add Dependency:
      </label>
      <DependenciesInput addDependency={addDependency} />
      <label className="TaskEdit__Label">Dependencies:</label>
      {/* TODO: Change from using _task_list for dependencies */}
      <TagList tags={dependencies} onTagClick={removeDependency} />
      <ButtonGroup className="TaskEdit__Buttons">
        <Button type="submit">Confirm</Button>
        <BackButton>Cancel</BackButton>
      </ButtonGroup>
    </form>
  );
};

export default TaskEdit;
