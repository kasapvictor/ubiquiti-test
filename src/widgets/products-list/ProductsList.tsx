import { useState } from 'react';

import { Box, createStyles, Text } from '@mantine/core';

import { useQueryProducts, ProductPreview, ProductsViewMode } from '@entities/products';

import { useTranslate } from '@shared/hooks';
import { log } from '@shared/lib';

import { getIconSource } from './lib';
import { ListTopRow, ProductsTopBar } from './ui';

export const ProductsList = () => {
  const { classes, cx } = useStyles();

  const { t: tBase } = useTranslate({ keyPrefix: 'base' });

  const [viewMode, setViewMode] = useState(ProductsViewMode.List);

  const products = useQueryProducts();

  log('viewMode', viewMode);

  const isListView = viewMode === ProductsViewMode.List;

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

      <Box className={classes.wrapper}>
        <ListTopRow count={products.data.devices.length} isListViewMode={isListView} />

        <Box
          className={cx(classes.products, {
            [classes.productsList]: isListView,
            [classes.productsGrid]: !isListView,
          })}>
          {products.data.devices.map((device) => (
            <Box
              key={device.id}
              className={cx({
                [classes.productRow]: isListView,
                [classes.productCard]: !isListView,
              })}>
              <ProductPreview
                id={device.id}
                isListView={isListView}
                line={device.line.name}
                name={device.product.name}
                iconSrc={getIconSource({ id: device.icon.id, resolutions: device.icon.resolutions, mode: viewMode })}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = createStyles((theme) => {
  return {
    wrapper: {
      padding: `${theme.spacing.xl} 5rem`,
    },
    products: {
      display: 'grid',
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
      transition: 'background-color .2s ease',
      cursor: 'pointer',
      '&:last-child': {
        borderBottom: `1px solid ${theme.colors.gray[1]}`,
      },
      '&:hover': {
        backgroundColor: theme.colors.gray[0],
      },
    },
  };
});
