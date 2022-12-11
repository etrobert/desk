import { useState } from 'react';

import TextInput from './TextInput';
import TagInput from './TagInput';
import TagList from './TagList';
import ButtonGroup from './ButtonGroup';
import Button from './Button';
import BackButton from './BackButton';

import useTags from '../hooks/useTags';

import type { Task } from '../types';

import './TaskEdit.css';

type Props<T extends Partial<Task>> = {
  task: T;
  onSubmit: (task: T & { title: string; tags: string[] }) => void;
};

const TaskEdit = <T extends Partial<Task>>({ task, onSubmit }: Props<T>) => {
  const [title, setTitle] = useState(task.title ?? '');
  const { tags, addTag, removeTag } = useTags();

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
      <ButtonGroup className="TaskEdit__Buttons">
        <Button type="submit">Confirm</Button>
        <BackButton>Cancel</BackButton>
      </ButtonGroup>
    </form>
  );
};

export default TaskEdit;
