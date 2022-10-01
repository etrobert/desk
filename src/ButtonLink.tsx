import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import './ButtonLink.css';

type Props = ComponentProps<typeof Link>;

const ButtonLink = (props: Props) => <Link className="ButtonLink" {...props} />;

export default ButtonLink;
