const items = [
  'Call Grandma',
  'Office number is 0612345254',
  'Water the plants',
];

const Process = () => {
  return (
    <div>
      <h1>Process</h1>
      <p>{items[0]}</p>
      <button>Delete</button>
      <button disabled>Do</button>
      <button disabled>Delegate</button>
      <button disabled>Defer</button>
      <button disabled>Archive</button>
      <button disabled>Incubate</button>
    </div>
  );
};

export default Process;
