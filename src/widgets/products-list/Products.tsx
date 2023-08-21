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
      <Box p="5rem">
        <Text>{tBase('loading')}</Text>
      </Box>
    );
  }

  // Empty data
  if (!productsQuery.data) {
    return (
      <Box p="5rem">
        <Text>{tBase('no-content')}</Text>
      </Box>
    );
  }

  // Error
  if (productsQuery.isError) {
    return (
      <Box p="5rem">
        <Text>{productsQuery.error}</Text>
      </Box>
    );
  }

  return (
    <Box pt="3.35rem">
      <ProductsTopBar products={productsQuery.data.devices} />

      <Box className={classes.listWrapper}>
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

const useStyles = createStyles(() => {
  return {
    listWrapper: {
      padding: '3.5rem 5rem 3rem 5rem',
    },
    list: {
      margin: '0 auto',
      paddingTop: '3.5rem',
    },
    products: {
      display: 'grid',
    },
    grid: {
      gap: '1.5rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, max-content))',
      paddingTop: '5rem',
    },
  };
});
