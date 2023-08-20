import { useStore } from 'effector-react';

import { Box, createStyles, Text } from '@mantine/core';

import { $viewMode, useQueryProducts, ProductsViewMode, $searchQuery } from '@entities/products/model';
import { ProductPreview } from '@entities/products/ui';

import { useTranslate } from '@shared/hooks';

import { ListTopRow, ProductsTopBar } from './ui';

export const ProductsList = () => {
  const { classes, cx } = useStyles();

  const { t: tBase } = useTranslate({ keyPrefix: 'base' });

  const viewMode = useStore($viewMode);
  const searchQuery = useStore($searchQuery);

  const productsQuery = useQueryProducts();

  const isListView = viewMode === ProductsViewMode.List;

  // Loading
  if (productsQuery.isLoading) {
    return (
      <Box p={56}>
        <Text>{tBase('loading')}</Text>
      </Box>
    );
  }

  // Empty data
  if (!productsQuery.data) {
    return (
      <Box p={56}>
        <Text>{tBase('no-content')}</Text>
      </Box>
    );
  }

  // Error
  if (productsQuery.isError) {
    return (
      <Box p={56}>
        <Text>{productsQuery.error}</Text>
      </Box>
    );
  }

  const productsWithSearchQuery = productsQuery.data.devices.filter((device) => device.shortnames.includes(searchQuery));
  const products = productsWithSearchQuery.length ? productsWithSearchQuery : productsQuery.data.devices;

  return (
    <Box>
      <ProductsTopBar />

      <Box className={classes.wrapper}>
        <ListTopRow count={productsQuery.data.devices.length} />

        <Box
          className={cx(classes.products, {
            [classes.list]: isListView,
            [classes.grid]: !isListView,
          })}>
          {products.map((device) => (
            <Box
              key={device.id}
              className={cx(classes.product, {
                [classes.row]: isListView,
                [classes.card]: !isListView,
              })}>
              <ProductPreview
                id={device.id}
                iconId={device.icon.id}
                line={device.line.name}
                name={device.product.name}
                iconResolutions={device.icon.resolutions}
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
      cursor: 'pointer',
      transition: 'background-color .2s ease, box-shadow .2s ease',
    },
    row: {
      height: 'auto',
      paddingTop: theme.spacing.xs,
      paddingBottom: theme.spacing.xs,
      borderTop: `1px solid ${theme.colors.gray[1]}`,

      '&:last-child': {
        borderBottom: `1px solid ${theme.colors.gray[1]}`,
      },
      '&:hover': {
        backgroundColor: theme.colors.gray[0],
      },
    },
    card: {
      height: '14.5625rem',
      overflow: 'hidden',
      borderRadius: theme.radius.md,
      border: `1px solid ${theme.colors.gray[3]}`,
      '&:hover': {
        boxShadow: theme.shadows.xl,
      },
    },
  };
});
