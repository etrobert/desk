import D3Tree from './D3Tree';

const data = {
  name: 'Root',
  children: [
    { name: 'Child 1' },
    {
      name: 'Child 2',
      children: [{ name: 'Grandchild 1' }, { name: 'Grandchild 2' }],
    },
  ],
} as const;

const Reflect = () => {
  return (
    <div className="App">
      <D3Tree data={data} />
    </div>
  );
};

export default Reflect;
