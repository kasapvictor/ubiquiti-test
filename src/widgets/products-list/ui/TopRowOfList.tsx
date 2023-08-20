import { useStore } from 'effector-react';

import { Box, createStyles, Text } from '@mantine/core';

import { $viewMode, ProductsViewMode } from '@entities/products/model';

import { useTranslate } from '@shared/hooks';

export const TopRowOfList = ({ count }: { count: number }) => {
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
      padding: `${theme.spacing.xs} 0`,
    },
  };
});
