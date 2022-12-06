import { useState } from 'react';
import TextInput from '../components/TextInput';

const existingTags = ['Work', 'Personal', 'Errands', 'Chores'];

type Props = {
  onNewTag: (tag: string) => void;
};

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
      />
      <datalist id="existing-tags">
        {existingTags.map((tag) => (
          <option key={tag} value={tag} />
        ))}
      </datalist>
    </>
  );
};

export default TagInput;
