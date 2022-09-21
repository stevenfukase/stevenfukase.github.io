import React, { FC, ReactNode } from 'react';

type CenteredWrapperProps = {
  children: ReactNode;
};

export const CenteredWrapper: FC<CenteredWrapperProps> = ({ children }) => (
  <div className="p-3 max-w-screen-xl mx-auto">
    {children}
  </div>
);
