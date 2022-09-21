import React, { FC } from 'react';

type LinkTextProps = {
  text: string;
  href: string;
};

export const LinkText: FC<LinkTextProps> = ({ text, href }) => (
  <a href={href}>
    {text}
  </a>
);
