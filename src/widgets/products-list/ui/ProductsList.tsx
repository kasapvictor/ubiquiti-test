import { Suspense, useDeferredValue } from 'react';

import { useStore } from 'effector-react';

import { Box, createStyles, Text } from '@mantine/core';

import { $filterBy, $searchQuery, $viewMode, IDevice, ProductsViewMode } from '@entities/products/model';
import { ProductPreview } from '@entities/products/ui';

import { useTranslate } from '@shared/hooks';

export const ProductsList = ({ products }: ProductsListProps) => {
  const { classes, cx } = useStyles();

  const { t: tBase } = useTranslate({ keyPrefix: 'base' });
  const { t: tWidget } = useTranslate({ keyPrefix: 'widget' });

  const viewMode = useStore($viewMode);
  const isListView = viewMode === ProductsViewMode.List;

  // 1) filter by line name
  const filteredBy = useStore($filterBy);
  const productsFiltered = productsFilteredBy(products, filteredBy);

  // 2) filter by search query
  const searchQuery = useStore($searchQuery);
  const deferredQuery = useDeferredValue(searchQuery);
  const productsSearched = productsWithSearchQuery(productsFiltered, filteredBy, deferredQuery);
  const productsBySearch = searchQuery.length >= 3 ? productsSearched : productsFiltered;

  return (
    <Suspense fallback={<Text>{tBase('search')}</Text>}>
      {productsBySearch.length ? (
        productsBySearch.map((device) => (
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
        ))
      ) : (
        <Text pl="sm">{tWidget('products.not-found')}</Text>
      )}
    </Suspense>
  );
};

// filter by line name
const productsFilteredBy = (products: IDevice[], filteredBy: string[]) => {
  const filtered = products.filter((device) => {
    return filteredBy.includes(device.line.name);
  });

  return filtered.length ? filtered : products;
};

// filter by search query
const productsWithSearchQuery = (products: IDevice[], filteredBy: string[], deferredQuery: string) => {
  return products.filter((device) => {
    const findShortname = device.shortnames.find((shortName) => {
      return shortName.toLowerCase().includes(deferredQuery.toLowerCase());
    });

    return findShortname ? device : false;
  });
};

interface ProductsListProps {
  products: IDevice[];
}

const useStyles = createStyles((theme) => {
  return {
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
      border: `1px solid ${theme.colors.gray[2]}`,
      '&:hover': {
        boxShadow: theme.shadows.xl,
      },
    },
  };
});
