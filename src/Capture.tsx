import { useContext, useState } from 'react';

import Button from './Button';
import { CaptureItemsContext } from './mocks/CaptureItemsContext';

import './Capture.css';

const Capture = () => {
  const [item, setItem] = useState('');
  const { addItem } = useContext(CaptureItemsContext);

  return (
    <>
      <h1>Capture</h1>
      <form
        className="Capture__form"
        onSubmit={(event) => {
          event.preventDefault();
          addItem(item);
          setItem('');
        }}
      >
        <input
          className="Capture__input"
          value={item}
          onChange={(event) => setItem(event.target.value)}
        />
        <Button type="submit">OK</Button>
      </form>
    </>
  );
};

export default Capture;
