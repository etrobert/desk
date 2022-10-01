import { useContext, useState } from 'react';

import ActionOrCancel from './ActionOrCancel';
import Button from './Button';
import { CaptureItemsContext } from './mocks/CaptureItemsContext';

const Capture = () => {
  const [item, setItem] = useState('');
  const { addItem } = useContext(CaptureItemsContext);

  return (
    <>
      <h1>Capture</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addItem(item);
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
