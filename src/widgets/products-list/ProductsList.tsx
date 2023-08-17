import { useState } from 'react';

import { Box, createStyles, Text } from '@mantine/core';

import { ProductsTopBar } from '@widgets/products-list/ProductsTopBar';

import { useQueryProducts } from '@entities/products';

import { useTranslate } from '@shared/hooks';

import { Product } from './Product';
import { ProductsViewMode } from './types';

// NOTE
//  BUILD IMAGE SRC WITH
//    https://static.ui.com/fingerprint/ui/icons/$(icon.id}_$(size.width)x$ {size. height}.png

export const ProductsList = () => {
  const { classes, cx } = useStyles();

  const { t: tBase } = useTranslate({ keyPrefix: 'base' });

  const [viewMode, setViewMode] = useState(ProductsViewMode.List);

  const products = useQueryProducts();

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
  if (products.isError) {
    return (
      <Box>
        <Text>{products.error}</Text>
      </Box>
    );
  }

  return (
    <Box>
      <ProductsTopBar viewMode={viewMode} setViewMode={setViewMode} />

      <Box
        className={cx(classes.products, {
          [classes.productsList]: viewMode === ProductsViewMode.List,
          [classes.productsGrid]: viewMode === ProductsViewMode.Grid,
        })}>
        {products.data.devices.map((device) => (
          <Product key={device.id} device={device} />
        ))}
      </Box>
    </Box>
  );
};

const useStyles = createStyles(() => {
  return {
    products: {
      display: 'grid',
    },

    productsList: {
      background: 'red',
    },
    productsGrid: {
      background: 'green',
    },
  };
});
