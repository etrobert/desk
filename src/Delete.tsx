import items from './items';

const Delete = () => {
  return (
    <div>
      <h1>Delete</h1>
      <p>{items[0]}</p>
      <button>Confirm</button>
      <button>Cancel</button>
    </div>
  );
};

export default Delete;
