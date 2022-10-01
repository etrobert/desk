import { ComponentProps } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from './Button';

type Props = Omit<ComponentProps<typeof Button>, 'onClick'>;

const BackButton = (props: Props) => {
  const navigate = useNavigate();
  return <Button onClick={() => navigate(-1)} {...props} />;
};

export default BackButton;
