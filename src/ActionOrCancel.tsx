import { ReactElement } from 'react';

import ButtonGroup from './ButtonGroup';
import ButtonLink from './ButtonLink';

type Props = {
  children: ReactElement;
};

const ActionOrCancel = ({ children }: Props) => (
  <ButtonGroup>
    {children}
    <ButtonLink to="..">Cancel</ButtonLink>
  </ButtonGroup>
);

export default ActionOrCancel;
