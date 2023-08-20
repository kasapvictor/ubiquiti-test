import { IconSearch } from '@tabler/icons-react';
import { useStore } from 'effector-react';

import { Box, createStyles, TextInput } from '@mantine/core';

import { $searchQuery, setQuerySearch, useQueryProducts } from '@entities/products/model';

import { useTranslate } from '@shared/hooks';
import { CloseClearButton } from '@shared/ui';

export const ProductsSearch = () => {
  const { classes } = useStyles();

  const { t: tWidget } = useTranslate({ keyPrefix: 'widget' });

  const searchQuery = useStore($searchQuery);

  const products = useQueryProducts();

  if (!products.data) {
    return null;
  }

  return (
    <Box className={classes.wrapper}>
      <TextInput
        name="q"
        radius="md"
        type="search"
        value={searchQuery}
        className={classes.search}
        icon={<IconSearch size="1rem" />}
        placeholder={tWidget('products.search-placeholder')}
        onChange={(e) => setQuerySearch(e.target.value)}
      />
      {searchQuery && (
        <Box className={classes.clearWrapper}>
          <CloseClearButton onClick={() => setQuerySearch('')} />
        </Box>
      )}
    </Box>
  );
};

const useStyles = createStyles((theme) => {
  return {
    wrapper: {
      position: 'relative',
    },
    search: {
      width: '21.5rem',
      input: {
        border: 'none',
        backgroundColor: theme.colors.gray[0],
        transition: 'background-color .2s ease',
        '&:focus': {
          backgroundColor: theme.colors.gray[1],
        },
        '&:hover': {
          backgroundColor: theme.colors.gray[1],
        },
      },
      '.mantine-Autocomplete-dropdown': {
        borderRadius: theme.radius.md,
      },
      '.mantine-Autocomplete-item': {
        borderRadius: theme.radius.sm,
      },
    },
    clearWrapper: {
      position: 'absolute',
      top: '50%',
      right: theme.spacing['4'],
      color: theme.colors.gray[5],
      transform: 'translateY(-50%)',
    },
  };
});
