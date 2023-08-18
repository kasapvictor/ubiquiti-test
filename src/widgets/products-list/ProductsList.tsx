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
            [classes.list]: isListView,
            [classes.grid]: !isListView,
          })}>
          {products.data.devices.map((device) => (
            <Box
              key={device.id}
              className={cx(classes.product, {
                [classes.row]: isListView,
                [classes.card]: !isListView,
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
    list: {},
    grid: {
      gap: '1.5rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(14.5625rem, 1fr))',
    },
    product: {
      transition: 'background-color .2s ease',
    },
    row: {
      height: 'auto',
      paddingTop: theme.spacing.xs,
      paddingBottom: theme.spacing.xs,
      borderTop: `1px solid ${theme.colors.gray[1]}`,

      cursor: 'pointer',
      '&:last-child': {
        borderBottom: `1px solid ${theme.colors.gray[1]}`,
      },
      '&:hover': {
        backgroundColor: theme.colors.gray[0],
      },
    },
    card: {
      height: '14.5625rem',
    },
  };
});
