import { useStore } from 'effector-react';

import { Box, createStyles, Text } from '@mantine/core';

import { $viewMode, useQueryProducts, ProductsViewMode } from '@entities/products/model';

import { useTranslate } from '@shared/hooks';

import { TopRowOfList, ProductsTopBar, ProductsList } from './ui';

export const Products = () => {
  const { classes, cx } = useStyles();

  const { t: tBase } = useTranslate({ keyPrefix: 'base' });

  const viewMode = useStore($viewMode);

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

  return (
    <Box>
      <ProductsTopBar />

      <Box className={classes.wrapper}>
        <TopRowOfList count={productsQuery.data.devices.length} />

        <Box
          className={cx(classes.products, {
            [classes.list]: isListView,
            [classes.grid]: !isListView,
          })}>
          <ProductsList products={productsQuery.data.devices} />
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = createStyles((theme) => {
  return {
    wrapper: {
      margin: '0 auto',
      padding: `${theme.spacing.xl} 5rem`,
    },
    products: {
      display: 'grid',
    },
    list: {},
    grid: {
      gap: '1.5rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, max-content))',
    },
  };
});
