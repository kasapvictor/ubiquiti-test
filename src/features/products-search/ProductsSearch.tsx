import { IconSearch, IconX } from '@tabler/icons-react';
import { useStore } from 'effector-react';

import { ActionIcon, Box, createStyles, TextInput } from '@mantine/core';

import { $searchQuery, setQuerySearch, useQueryProducts } from '@entities/products/model';

import { useTranslate } from '@shared/hooks';

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
        <ActionIcon className={classes.clear} variant="transparent" onClick={() => setQuerySearch('')}>
          <IconX size="1rem" />
        </ActionIcon>
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
    clear: {
      position: 'absolute',
      top: '50%',
      right: theme.spacing['4'],
      color: theme.colors.gray[5],
      transform: 'translateY(-50%)',
      '&:hover': {
        color: theme.colors.gray[5],
      },
      '&:active': {
        transform: 'translateY(-47%)',
      },
    },
  };
});
