import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

import type { ComponentProps } from 'react';

type Props = ComponentProps<typeof Link>;

const ButtonLink = ({ className, ...props }: Props) => (
  <Link className={cn(className, buttonVariants())} {...props} />
);

export default ButtonLink;
