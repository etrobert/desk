import { useState } from 'react';

const Capture = () => {
  const [item, setItem] = useState('');

  return (
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
  );
};

export default Capture;
