import { useState } from 'react';
import TextInput from '../components/TextInput';

const existingTags = ['Work', 'Personal', 'Errands', 'Chores'];

const TagInput = ({ onNewTag }: { onNewTag: (tag: string) => void }) => {
  const [newTag, setNewTag] = useState('');

  return (
    <>
      <TextInput
        onKeyDown={(event) => {
          if (event.key !== 'Enter') return;
          event.preventDefault();
          onNewTag(newTag);
          setNewTag('');
        }}
        onChange={(event) => setNewTag(event.target.value)}
        value={newTag}
        list="existing-tags"
        id="tags"
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
