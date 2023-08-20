import { Suspense, useDeferredValue } from 'react';

import { useStore } from 'effector-react';

import { Box, createStyles, Text } from '@mantine/core';

import { $searchQuery, $viewMode, IDevice, ProductsViewMode } from '@entities/products/model';
import { ProductPreview } from '@entities/products/ui';

import { useTranslate } from '@shared/hooks';

export const ProductsList = ({ products }: ProductsListProps) => {
  const { classes, cx } = useStyles();

  const { t: tBase } = useTranslate({ keyPrefix: 'base' });

  const viewMode = useStore($viewMode);
  const isListView = viewMode === ProductsViewMode.List;

  const searchQuery = useStore($searchQuery);
  const deferredQuery = useDeferredValue(searchQuery);

  const productsWithSearch = productsWithSearchQuery(products, deferredQuery);
  const filteredProducts = productsWithSearch.length ? productsWithSearch : products;

  return (
    <Suspense fallback={<Text>{tBase('search')}</Text>}>
      {filteredProducts.map((device) => (
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
    </Suspense>
  );
};

const productsWithSearchQuery = (products: IDevice[], deferredQuery: string) => {
  return products.filter((device) => {
    if (deferredQuery.length >= 3) {
      const findShortname = device.shortnames.find((shortName) => {
        return shortName.toLowerCase().includes(deferredQuery.toLowerCase());
      });

      if (findShortname) {
        return device;
      }
    }

    return false;
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
      border: `1px solid ${theme.colors.gray[3]}`,
      '&:hover': {
        boxShadow: theme.shadows.xl,
      },
    },
  };
});
