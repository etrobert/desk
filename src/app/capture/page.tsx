'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { TypographyH1 } from '@/components/ui/typography';
import TextInput from '../../components/TextInput';
import useCaptureItemsCount from '../../data/capture-items/useCaptureItemsCount';
import useAddCaptureItem from '../../data/capture-items/useAddCaptureItem';

const Capture = () => {
  const [item, setItem] = useState('');
  const itemsCount = useCaptureItemsCount();
  const addCaptureItem = useAddCaptureItem();

  if (itemsCount === null) return <>Loading...</>;

  return (
    <>
      <TypographyH1>Capture</TypographyH1>
      <form
        className="grid gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          if (item.trim() === '') return;
          addCaptureItem({ value: item });
          setItem('');
        }}
      >
        <TextInput
          autoFocus
          value={item}
          onChange={(event) => setItem(event.target.value)}
        />
        <Button type="submit">OK</Button>
      </form>
      <p>Capture Items: {itemsCount}</p>
    </>
  );
};

export default Capture;
