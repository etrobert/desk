import { useState } from 'react';

import ActionOrCancel from './ActionOrCancel';
import Button from './Button';

const Capture = () => {
  const [item, setItem] = useState('');

  return (
    <>
      <h1>Capture</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // TODO: Add Item
          console.log(item);
          setItem('');
        }}
      >
        <input value={item} onChange={(event) => setItem(event.target.value)} />
        <ActionOrCancel>
          <Button type="submit">Capture</Button>
        </ActionOrCancel>
      </form>
    </>
  );
};

export default Capture;
