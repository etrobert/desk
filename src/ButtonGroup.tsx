import { Children, ReactNode } from 'react';

import './ButtonGroup.css';

type Props = { children: ReactNode };

const ButtonGroup = ({ children }: Props) => (
  <ul className="ButtonGroup">
    {Children.map(children, (child) => (
      <li>{child}</li>
    ))}
  </ul>
);
export default ButtonGroup;
