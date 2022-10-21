import { Children, ReactNode } from 'react';

import './ButtonGroup.css';

type Props = { className?: string; children: ReactNode };

const ButtonGroup = ({ className, children }: Props) => (
  <ul className={`${className} ButtonGroup`}>
    {Children.map(children, (child) => (
      <li>{child}</li>
    ))}
  </ul>
);
export default ButtonGroup;
