import { useContext, useState } from 'react';

import Button from './Button';
import { CaptureItemsContext } from './mocks/CaptureItemsContext';

import './Capture.css';

const Capture = () => {
  const [item, setItem] = useState('');
  const { addItem, itemsCount } = useContext(CaptureItemsContext);

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
          autoFocus
          className="Capture__input"
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
