import { ReactElement } from 'react';

import ButtonGroup from './ButtonGroup';
import BackButton from './BackButton';

type Props = {
  children: ReactElement;
};

const ActionOrCancel = ({ children }: Props) => (
  <ButtonGroup>
    {children}
    <BackButton>Cancel</BackButton>
  </ButtonGroup>
);

export default ActionOrCancel;
