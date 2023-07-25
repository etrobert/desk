import { useState } from 'react';
import TextInput from './TextInput';
import useExistingTags from '../data/useExistingTags';

type Props = {
  onNewTag: (tag: string) => void;
};

function ExistingTags() {
  const existingTags = useExistingTags();

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
        onChange={(event) => setNewTag(event.target.value)}
        value={newTag}
        id="new-tag"
        list="existing-tags"
      />
      <ExistingTags />
    </>
  );
};

export default TagInput;
