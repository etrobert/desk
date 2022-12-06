import Button from '../components/Button';

import './TagList.css';

type Props = {
  tags: string[];
  onTagClick?: (tag: string) => void;
};

const TagList = ({ tags, onTagClick }: Props) => (
  <ul className="TagList">
    {tags.map((tag) => (
      <li key={tag}>
        <Button
          className="TagList__Tag"
          onClick={onTagClick && (() => onTagClick(tag))}
        >
          {tag}
        </Button>
      </li>
    ))}
  </ul>
);

export default TagList;
