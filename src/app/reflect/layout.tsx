import { TypographyH1 } from '@/components/ui/typography';

import type { PropsWithChildren } from 'react';

const Reflect = ({ children }: PropsWithChildren) => (
  <>
    <TypographyH1>Reflect</TypographyH1>
    {children}
  </>
);

export default Reflect;
