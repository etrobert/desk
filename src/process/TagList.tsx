import Button from '../components/Button';

import './TagList.css';

type Props = {
  tags: string[];
  onTagClick: (tag: string) => void;
};

const TagList = ({ tags, onTagClick }: Props) => (
  <ul
    style={{
      display: 'grid',
      gridAutoFlow: 'column',
      gap: '1rem',
      justifyContent: 'start',
    }}
  >
    {tags.map((tag) => (
      <li key={tag}>
        <Button className="TagList__Tag" onClick={() => onTagClick(tag)}>
          {tag}
        </Button>
      </li>
    ))}
  </ul>
);

export default TagList;
