import React from 'react';

import { Box, Text } from '@mantine/core';

import { useQueryProducts } from '@entities/products';

import { useTranslate } from '@shared/hooks';
import { log } from '@shared/lib';

// TODO
//  BUILD URL WITH
//  https://static.ui.com/fingerprint/ui/icons/$(icon.id}_$(size.width)x$ {size. height}.png
const Home = () => {
  const { t: tBase } = useTranslate({ keyPrefix: 'base' });
  const { t: tPageHome } = useTranslate({ keyPrefix: 'page.home' });

  const products = useQueryProducts();

  log('products', products.data);

  // Loading
  if (products.isLoading) {
    return (
      <Box>
        <Text>{tBase('loading')}</Text>
      </Box>
    );
  }

  // Empty data
  if (!products.data) {
    return (
      <Box>
        <Text>{tBase('no-content')}</Text>
      </Box>
    );
  }

  // Error
  if (!products.isError) {
    return (
      <Box>
        <Text>{products.error}</Text>
      </Box>
    );
  }

  // Success
  return (
    <Box>
      <Text>{tPageHome('title')}</Text>
    </Box>
  );
};

export default Home;
