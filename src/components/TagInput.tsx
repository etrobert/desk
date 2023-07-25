import { useState } from 'react';
import TextInput from './TextInput';
import useExistingTags from '../data/useExistingTags';

type Props = {
  onNewTag: (tag: string) => void;
};

type ExistingTagsProps = {
  existingTags: ReturnType<typeof useExistingTags>;
};

function ExistingTags({ existingTags }: ExistingTagsProps) {
  return (
    <datalist id="existing-tags">
      {existingTags?.map((tag) => (
        <option key={tag}>{tag}</option>
      ))}
    </datalist>
  );
}

const TagInput = ({ onNewTag }: Props) => {
  const [newTag, setNewTag] = useState('');
  const existingTags = useExistingTags();

  return (
    <>
      <TextInput
        onKeyDown={(event) => {
          if (event.key !== 'Enter') return;
          event.preventDefault();
          if (newTag === '') return;
          onNewTag(newTag);
          setNewTag('');
        }}
        onChange={(event) => {
          const { value } = event.target;
          if (existingTags?.some((tag) => tag === value)) {
            onNewTag(value);
            setNewTag('');
            return;
          }
          setNewTag(value);
        }}
        value={newTag}
        id="new-tag"
        list="existing-tags"
      />
      <ExistingTags existingTags={existingTags} />
    </>
  );
};

export default TagInput;
