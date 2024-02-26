import { ComponentProps } from 'react';
import Link from 'next/link';

import './ButtonLink.css';
import './ButtonShared.css';

type Props = ComponentProps<typeof Link>;

const ButtonLink = ({ className, ...props }: Props) => (
  <Link className={`${className} ButtonShared ButtonLink`} {...props} />
);

export default ButtonLink;
