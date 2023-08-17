import { useState } from 'react';

import { Box, createStyles, Text } from '@mantine/core';

import { useQueryProducts, Product, ProductsViewMode } from '@entities/products';

import { useTranslate } from '@shared/hooks';

import { buildImageSrc } from './lib';
import { ProductsTopBar } from './ui';

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
            <Product
              id={device.id}
              line={device.line.name}
              name={device.product.name}
              iconSrc={buildImageSrc({ id: device.icon.id, width: device.icon.resolutions[0][0], height: device.icon.resolutions[0][1] })}
              isRowView={viewMode === ProductsViewMode.List}
            />
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
      // display: 'grid',
      // gridTemplateColumns: '8.5rem 15.875rem 1fr',

      height: 'auto',
      paddingTop: theme.spacing.xs,
      paddingBottom: theme.spacing.xs,
      borderTop: `1px solid ${theme.colors.gray[1]}`,
      borderBottom: `1px solid ${theme.colors.gray[1]}`,
    },
  };
});
