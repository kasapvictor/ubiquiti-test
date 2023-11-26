import { useStore } from 'effector-react';

import { Box, createStyles, Text } from '@mantine/core';

import { $viewMode, ProductsViewMode } from '@entities/products/model';

import { useTranslate } from '@shared/hooks';

export const TopRow = ({ count }: { count: number }) => {
  const { classes, cx } = useStyles();
  const { t: tWidget } = useTranslate({ keyPrefix: 'widget' });

  const viewMode = useStore($viewMode);
  const isListView = viewMode === ProductsViewMode.List;

  return (
    <Box className={cx(classes.topListRow)}>
      <Text ml="auto" pr="2.5rem" color="gray.4">
        {tWidget('products.devices', { count: String(count) })}
      </Text>
      {isListView && (
        <>
          <Text transform="uppercase" fw={700}>
            {tWidget('products.product-line')}
          </Text>
          <Text transform="uppercase" fw={700}>
            {tWidget('products.name')}
          </Text>
        </>
      )}
    </Box>
  );
};

const useStyles = createStyles((theme) => {
  return {
    topListRow: {
      display: 'grid',
      gridTemplateColumns: '8.5rem 15.875rem 1fr',
      alignItems: 'center',
      width: 'auto',
      height: '3.5rem',
      padding: `${theme.spacing.xs} 0`,
      position: 'fixed',
      zIndex: 10,
      left: '5rem',
      right: '5rem',
      backgroundColor: theme.white,
      borderBottom: `1px solid ${theme.colors.gray[1]}`,
      [theme.fn.smallerThan('md')]: {
        left: '1rem',
        right: '1rem',
        top: '6.5rem',
      },
      [theme.fn.smallerThan('xs')]: {
        display: 'none',
      },
    },
  };
});
