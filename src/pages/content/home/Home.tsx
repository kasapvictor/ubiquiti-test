import React from 'react';

import { Box, Text } from '@mantine/core';

import { useTranslate } from '@shared/hooks';

const Home = () => {
  const { t: tPageHome } = useTranslate({ keyPrefix: 'page.home' });

  return (
    <Box>
      <Text>{tPageHome('title')}</Text>
    </Box>
  );
};

export default Home;
