import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import ButtonGroup from '../components/ButtonGroup';
import BackButton from '../components/BackButton';
import TextInput from '../components/TextInput';

import useTags from '../hooks/useTags';

import useDeleteLatestCaptureItem from '../data/capture-items/useDeleteLatestCaptureItem';
import useAddTask from '../data/tasks/useAddTask';

import TagInput from './TagInput';
import TagList from './TagList';

import type { CaptureItem } from '../types';

import './Defer.css';

type Props = {
  captureItem: CaptureItem;
};

const Defer = ({ captureItem }: Props) => {
  const [title, setTitle] = useState(captureItem.value);
  const navigate = useNavigate();
  const deleteLatestCaptureItem = useDeleteLatestCaptureItem();
  const addTask = useAddTask();
  const { tags, addTag, removeTag } = useTags();

  return (
    <form
      className="ProcessDefer__Form"
      onSubmit={(event) => {
        event.preventDefault();
        if (title === '') return;
        addTask({ title, tags });
        deleteLatestCaptureItem();
        navigate(-1);
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
      <label className="ProcessDefer__Label" htmlFor="tags">
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

export default Defer;
