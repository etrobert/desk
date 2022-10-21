import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import ButtonGroup from '../components/ButtonGroup';
import BackButton from '../components/BackButton';
import TextInput from '../components/TextInput';

import useDeleteLatestCaptureItem from '../data/capture-items/useDeleteLatestCaptureItem';
import useAddTask from '../data/tasks/useAddTask';

import './Defer.css';

const Defer = () => {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();
  const deleteLatestCaptureItem = useDeleteLatestCaptureItem();
  const addTask = useAddTask();

  return (
    <form
      className="ProcessDefer__Form"
      onSubmit={(event) => {
        event.preventDefault();
        if (title === '') return;
        addTask({ title });
        deleteLatestCaptureItem();
        navigate(-1);
      }}
    >
      <label className="ProcessDefer__Title">
        Title:
        <TextInput
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <ButtonGroup>
        <Button type="submit">Defer</Button>
        <BackButton>Cancel</BackButton>
      </ButtonGroup>
    </form>
  );
};

export default Defer;
