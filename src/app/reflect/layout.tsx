import { TypographyH1 } from '@/components/ui/typography';

import type { PropsWithChildren } from 'react';

const Reflect = ({ children }: PropsWithChildren) => (
  <div>
    <TypographyH1>Reflect</TypographyH1>
    {children}
  </div>
);

export default Reflect;
