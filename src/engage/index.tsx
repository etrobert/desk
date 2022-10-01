import Button from '../Button';

const tasks = [
  {
    id: '123',
    title: 'Water the plants',
  },
  {
    id: '234',
    title: 'Call grandma',
  },
];

const Engage = () => (
  <>
    <h1>Engage</h1>
    <ul>
      {tasks.map(({ id, title }) => (
        <li key={id}>
          <Button disabled>{title}</Button>
        </li>
      ))}
    </ul>
  </>
);

export default Engage;
