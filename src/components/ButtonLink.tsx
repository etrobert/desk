import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

import type { ComponentProps } from 'react';
import type { Variant } from '@/components/ui/button';

type Props = ComponentProps<typeof Link> & {
  variant?: Variant;
};

const ButtonLink = ({ className, variant = 'secondary', ...props }: Props) => (
  <Link className={cn(className, buttonVariants({ variant }))} {...props} />
);

export default ButtonLink;
