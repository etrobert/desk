import { useState } from 'react';
import TextInput from '../components/TextInput';

type Props = {
  onNewTag: (tag: string) => void;
};

const TagInput = ({ onNewTag }: Props) => {
  const [newTag, setNewTag] = useState('');

  return (
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
  );
};

export default TagInput;
