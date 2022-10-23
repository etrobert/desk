import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import ButtonGroup from '../components/ButtonGroup';
import BackButton from '../components/BackButton';
import TextInput from '../components/TextInput';

import useDeleteLatestCaptureItem from '../data/capture-items/useDeleteLatestCaptureItem';
import useAddTask from '../data/tasks/useAddTask';

import { priorities } from '../constants';

import type { Priority } from '../types';

import './Defer.css';

const capitalize = (s: string) => `${s[0].toUpperCase()}${s.substr(1)}`;
const mapWords = (modifier: (word: string) => string) => (sentence: string) =>
  sentence.split(' ').map(modifier).join(' ');
const capitalizeWords = mapWords(capitalize);

const Defer = () => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const navigate = useNavigate();
  const deleteLatestCaptureItem = useDeleteLatestCaptureItem();
  const addTask = useAddTask();

  return (
    <form
      className="ProcessDefer__Form"
      onSubmit={(event) => {
        event.preventDefault();
        if (title === '') return;
        addTask({ title, priority });
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
      <label className="ProcessDefer__Label" htmlFor="priority">
        Priority:
      </label>
      <select
        id="priority"
        value={priority}
        onChange={(event) => setPriority(event.target.value as Priority)}
      >
        {priorities.map((value) => (
          <option key={value} value={value}>
            {capitalizeWords(value)}
          </option>
        ))}
      </select>
      <ButtonGroup className="ProcessDefer__Buttons">
        <Button type="submit">Defer</Button>
        <BackButton>Cancel</BackButton>
      </ButtonGroup>
    </form>
  );
};

export default Defer;
