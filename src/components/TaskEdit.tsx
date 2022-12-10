import { useState } from 'react';

import TextInput from './TextInput';
import TagInput from './TagInput';
import TagList from './TagList';
import ButtonGroup from './ButtonGroup';
import Button from './Button';
import BackButton from './BackButton';

import useTags from '../hooks/useTags';

type Props = {
  task: { title: string };
  onSubmit: (task: { title: string; tags: string[] }) => void;
};

const TaskEdit = ({ task, onSubmit }: Props) => {
  const [title, setTitle] = useState(task.title);
  const { tags, addTag, removeTag } = useTags();

  return (
    <form
      className="ProcessDefer__Form"
      onSubmit={(event) => {
        event.preventDefault();
        if (title === '') return;
        onSubmit({ ...task, title, tags });
      }}
    >
      <label className="ProcessDefer__Label" htmlFor="title">
        Title:
      </label>
      <TextInput
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label className="ProcessDefer__Label" htmlFor="new-tag">
        Add Tag:
      </label>
      <TagInput onNewTag={addTag} />
      <label className="ProcessDefer__Label">Tags:</label>
      <TagList tags={tags} onTagClick={removeTag} />
      <ButtonGroup className="ProcessDefer__Buttons">
        <Button type="submit">Defer</Button>
        <BackButton>Cancel</BackButton>
      </ButtonGroup>
    </form>
  );
};

export default TaskEdit;
