import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import './TextInput.css';

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const TextInput = ({ className, ...props }: Props) => {
  return <input className={`${className} TextInput`} {...props} />;
};

export default TextInput;
