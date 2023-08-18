import { PropsWithChildren } from 'react';

import { Container as ContainerMantine } from '@mantine/core';

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <ContainerMantine size="xl" maw="100%" mih="100%" h="100%" sx={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
      {children}
    </ContainerMantine>
  );
};
