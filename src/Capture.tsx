import { useState } from 'react';

import Button from './Button';
import TextInput from './TextInput';
import useCaptureItemsCount from './data/useCaptureItemsCount';
import addCaptureItem from './data/addCaptureItem';

import './Capture.css';

const Capture = () => {
  const [item, setItem] = useState('');
  const itemsCount = useCaptureItemsCount();

  if (itemsCount === null) return <>Loading...</>;

  return (
    <>
      <h1>Capture</h1>
      <form
        className="Capture__form"
        onSubmit={(event) => {
          event.preventDefault();
          if (item.trim() === '') return;
          addCaptureItem({ value: item });
          setItem('');
        }}
      >
        <TextInput
          autoFocus
          value={item}
          onChange={(event) => setItem(event.target.value)}
        />
        <Button type="submit">OK</Button>
      </form>
      <p>Capture Items: {itemsCount}</p>
    </>
  );
};

export default Capture;
