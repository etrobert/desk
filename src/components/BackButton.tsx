'use client';

import { ComponentProps } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

type Props = Omit<ComponentProps<typeof Button>, 'onClick'>;

const BackButton = (props: Props) => (
  <Button onClick={useRouter().back} {...props} />
);

export default BackButton;
