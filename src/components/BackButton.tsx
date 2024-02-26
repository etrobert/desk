import { ComponentProps } from 'react';
import { useRouter } from 'next/navigation';

import Button from './Button';

type Props = Omit<ComponentProps<typeof Button>, 'onClick'>;

const BackButton = (props: Props) => {
  const router = useRouter();
  return <Button onClick={() => router.back()} {...props} />;
};

export default BackButton;
