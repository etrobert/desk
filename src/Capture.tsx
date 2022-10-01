import { useState } from 'react';

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
      </form>
    </>
  );
};

export default Capture;
