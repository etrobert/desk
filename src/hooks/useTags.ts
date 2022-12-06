import { useCallback, useState } from 'react';

const useTags = () => {
  const [tags, setTags] = useState<string[]>([]);

  const addTag = useCallback(
    (newTag: string) =>
      setTags((tags) =>
        tags.find((tag) => tag === newTag) === undefined
          ? [...tags, newTag]
          : tags
      ),
    []
  );

  const removeTag = useCallback(
    (tagToRemove: string) =>
      setTags((tags) => tags.filter((tag) => tag !== tagToRemove)),
    []
  );

  return { tags, addTag, removeTag };
};

export default useTags;
