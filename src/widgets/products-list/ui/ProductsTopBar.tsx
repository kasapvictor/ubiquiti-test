/* eslint-disable no-unused-vars */

import { IconLayoutGrid, IconList } from '@tabler/icons-react';
import { useStore } from 'effector-react';

import { Box, createStyles, Flex, Group, Radio, Text } from '@mantine/core';

import { ProductsSearch } from '@features/products-search';

import { $viewMode, setViewMode, ProductsViewMode } from '@entities/products/model';

export const ProductsTopBar = () => {
  const { classes, cx } = useStyles();

  const viewMode = useStore($viewMode);

  return (
    <Box className={classes.topBar}>
      <Flex align="center" h="100%" pr={28} pl={28} justify="space-between">
        <ProductsSearch />
        <Group>
          <Radio.Group value={viewMode} onChange={(value) => setViewMode(value as ProductsViewMode)}>
            <Group spacing="lg">
              <Radio className={cx(classes.radio)} value={ProductsViewMode.List} label={<IconList size="1.3rem" />} />
              <Radio className={cx(classes.radio)} value={ProductsViewMode.Grid} label={<IconLayoutGrid size="1.3rem" />} />
            </Group>
          </Radio.Group>
          <Text>Filter</Text>
        </Group>
      </Flex>
    </Box>
  );
};

const useStyles = createStyles((theme) => {
  return {
    topBar: {
      height: theme.spacing['56'],
      borderTop: `1px solid ${theme.colors.gray[1]}`,
      borderBottom: `1px solid ${theme.colors.gray[1]}`,
      color: theme.colors.gray[7],
    },
    radio: {
      '.mantine-Radio-labelWrapper': {
        borderRadius: theme.radius.sm,
      },
      input: {
        display: 'none',
      },
      label: {
        paddingLeft: 0,
        color: theme.colors.gray[7],
      },
      '&[data-checked="true"]': {
        '.mantine-Radio-labelWrapper': {
          background: theme.colors.gray[1],
        },
      },
    },
  };
});
