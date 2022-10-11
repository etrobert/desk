import { DetailedHTMLProps } from 'react';

import './Button.css';
import './ButtonShared.css';

type Props = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({ className, type, ...props }: Props) => (
  <button
    className={`${className} Button ButtonShared`}
    type={type ?? 'button'}
    {...props}
  />
);

export default Button;
