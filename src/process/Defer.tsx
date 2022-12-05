import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import ButtonGroup from '../components/ButtonGroup';
import BackButton from '../components/BackButton';
import TextInput from '../components/TextInput';

import useDeleteLatestCaptureItem from '../data/capture-items/useDeleteLatestCaptureItem';
import useAddTask from '../data/tasks/useAddTask';

import TagInput from './TagInput';

import type { CaptureItem } from '../types';

import './Defer.css';

type Props = {
  captureItem: CaptureItem;
};

const Tag = ({ name }: { name: string }) => (
  <div
    style={{
      fontSize: '0.8em',
      padding: '0.5rem 1rem',
      borderRadius: '0.75rem',
      backgroundColor: 'rgba(255, 255, 255, 0.10)',
    }}
  >
    {name}
  </div>
);

const Defer = ({ captureItem }: Props) => {
  const [title, setTitle] = useState(captureItem.value);
  const navigate = useNavigate();
  const deleteLatestCaptureItem = useDeleteLatestCaptureItem();
  const addTask = useAddTask();
  const [tags, setTags] = useState<string[]>([]);

  const addTag = useCallback(
    (newTag: string) => setTags((tags) => [...tags, newTag]),
    []
  );

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
      <section
        style={{
          display: 'grid',
          gridAutoFlow: 'column',
          gap: '1rem',
          justifyContent: 'start',
        }}
      >
        {tags.map((tag) => (
          <Tag key={tag} name={tag} />
        ))}
      </section>
      <ButtonGroup className="ProcessDefer__Buttons">
        <Button type="submit">Defer</Button>
        <BackButton>Cancel</BackButton>
      </ButtonGroup>
    </form>
  );
};

export default Defer;
