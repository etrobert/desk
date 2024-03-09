import { Button } from '../components/ui/button';

type Props = {
  tags: string[];
  onTagClick?: (tag: string) => void;
};

const TagList = ({ tags, onTagClick }: Props) => (
  <ul className="flex gap-4">
    {tags.map((tag) => (
      <li key={tag}>
        <Button
          variant="outline"
          onClick={onTagClick && (() => onTagClick(tag))}
        >
          {tag}
        </Button>
      </li>
    ))}
  </ul>
);

export default TagList;
