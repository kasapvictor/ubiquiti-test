/* eslint-disable no-unused-vars */

import { IconLayoutGrid, IconList } from '@tabler/icons-react';
import { useStore } from 'effector-react';

import { Box, createStyles, Group, Radio } from '@mantine/core';

import { $viewMode, setViewMode, ProductsViewMode } from '@entities/products/model';

export const ProductsTopBar = () => {
  const { classes, cx } = useStyles();

  const viewMode = useStore($viewMode);

  return (
    <Box>
      <Radio.Group
        value={viewMode}
        onChange={(value) => {
          setViewMode(value as ProductsViewMode);
        }}>
        <Group spacing="lg">
          <Radio className={cx(classes.radio)} value={ProductsViewMode.List} label={<IconList size="1.3rem" />} />
          <Radio className={cx(classes.radio)} value={ProductsViewMode.Grid} label={<IconLayoutGrid size="1.3rem" />} />
        </Group>
      </Radio.Group>
    </Box>
  );
};

const useStyles = createStyles((theme) => {
  return {
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
