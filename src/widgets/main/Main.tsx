import { PropsWithChildren } from 'react';

export const Main = ({ children }: PropsWithChildren) => {
  return <main style={{ flex: 1 }}>{children}</main>;
};
