import { Children, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = { className?: string; children: ReactNode };

const ButtonGroup = ({ className, children }: Props) => (
  <ul className={cn(className, 'grid grid-cols-2 gap-2')}>
    {Children.map(children, (child) => (
      <li className="grid">{child}</li>
    ))}
  </ul>
);
export default ButtonGroup;
