import { PropsWithChildren } from 'react';

import { Container as ContainerMantine } from '@mantine/core';

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <ContainerMantine size="xl" miw="78.75rem" mih="100%" h="100%" sx={{ display: 'flex', flexDirection: 'column' }}>
      {children}
    </ContainerMantine>
  );
};
