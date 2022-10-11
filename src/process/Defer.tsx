import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import BackButton from '../BackButton';
import TextInput from '../TextInput';

import useDeleteLatestCaptureItem from '../data/useDeleteLatestCaptureItem';
import addTask from '../data/addTask';

import './Defer.css';

const Defer = () => {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();
  const deleteLatestCaptureItem = useDeleteLatestCaptureItem();

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
