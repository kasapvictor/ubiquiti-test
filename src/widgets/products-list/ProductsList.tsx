import { useState } from 'react';

import { Box, createStyles, Text } from '@mantine/core';

import { ProductsTopBar } from '@widgets/products-list/ProductsTopBar';

import { useQueryProducts, Product } from '@entities/products';

import { useTranslate } from '@shared/hooks';

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
          <Box
            key={device.id}
            className={cx({
              [classes.productRow]: viewMode === ProductsViewMode.List,
              [classes.productCard]: viewMode === ProductsViewMode.Grid,
            })}>
            <Product deviceId={device.id} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const useStyles = createStyles((theme) => {
  return {
    products: {
      display: 'grid',
      paddingLeft: '3.59rem',
      paddingRight: '3.59rem',
    },
    productsList: {},
    productsGrid: {
      gap: '1.5rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(14.5625rem, 1fr))',
    },
    productCard: {
      height: '14.5625rem',
    },
    productRow: {
      height: 'auto',
      paddingTop: theme.spacing.xs,
      paddingBottom: theme.spacing.xs,
      borderTop: `1px solid ${theme.colors.gray[1]}`,
      borderBottom: `1px solid ${theme.colors.gray[1]}`,
    },
  };
});
