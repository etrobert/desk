import { PropsWithChildren } from 'react';
import { TypographyH1 } from '@/components/ui/typography';

const EngageLayout = ({ children }: PropsWithChildren) => (
  <>
    <TypographyH1>Engage</TypographyH1>
    {children}
  </>
);

export default EngageLayout;
