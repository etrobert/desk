import { useState } from 'react';
import TextInput from '../components/TextInput';

const TagInput = ({ onNewTag }: { onNewTag: (tag: string) => void }) => {
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
        id="tags"
      />
    </>
  );
};

export default TagInput;
