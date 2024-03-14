'use client';

import { Button } from '@/components/ui/button';
import { TypographyH1 } from '@/components/ui/typography';
import ButtonGroup from '../components/ButtonGroup';
import ButtonLink from '../components/ButtonLink';

const Menu = () => {
  return (
    <>
      <TypographyH1>Menu</TypographyH1>
      <ButtonGroup>
        <Button variant="secondary" disabled>
          Capture
        </Button>
        <Button variant="secondary" disabled>
          Process
        </Button>
        <ButtonLink href="engage">Engage</ButtonLink>
        <ButtonLink href="reflect">Reflect</ButtonLink>
      </ButtonGroup>
    </>
  );
};

export default Menu;
