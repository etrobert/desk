import { DetailedHTMLProps } from 'react';

import './Button.css';
import './ButtonShared.css';

type Props = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({ className, ...props }: Props) => (
  <button className={`${className} Button ButtonShared`} {...props} />
);

export default Button;
