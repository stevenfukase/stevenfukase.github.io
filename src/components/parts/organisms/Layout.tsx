import React, { FC, ReactNode } from 'react';


type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}
