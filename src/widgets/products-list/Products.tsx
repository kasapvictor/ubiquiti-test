import { useStore } from 'effector-react';

import { Box, createStyles, Text } from '@mantine/core';

import { $viewMode, useQueryProducts, ProductsViewMode } from '@entities/products/model';

import { useTranslate } from '@shared/hooks';

import { TopRow, ProductsTopBar, ProductsList } from './ui';

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
    <Box className={classes.wrapper}>
      <ProductsTopBar products={productsQuery.data.devices} />

      <Box className={classes.listWrapper}>
        <TopRow count={productsQuery.data.devices.length} />

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
      paddingTop: '3.35rem',
    },
    listWrapper: {
      padding: '3.5rem 5rem 3rem 5rem',

      [theme.fn.smallerThan('md')]: {
        padding: '5rem 1rem 5rem 1rem',
      },
      [theme.fn.smallerThan('xs')]: {
        paddingTop: 0,
      },
    },
    list: {
      margin: '0 auto',
      paddingTop: '3.5rem',
      [theme.fn.smallerThan('md')]: {
        paddingTop: '2rem',
      },
      [theme.fn.smallerThan('xs')]: {
        paddingTop: '3.5rem',
      },
    },
    products: {
      display: 'grid',
    },
    grid: {
      gap: '1.5rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, max-content))',
      [theme.fn.smallerThan('xs')]: {
        gridTemplateColumns: 'repeat(auto-fit, 100%)',
      },
      paddingTop: '5rem',
    },
  };
});
