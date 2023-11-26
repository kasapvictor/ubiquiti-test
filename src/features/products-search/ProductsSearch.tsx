import { useDeferredValue, useEffect, useState } from 'react';

import { IconSearch } from '@tabler/icons-react';
import { useStore } from 'effector-react';

import { Box, createStyles, Loader, TextInput } from '@mantine/core';

import { $searchQuery, setQuerySearch, useQueryProducts } from '@entities/products/model';

import { useTranslate } from '@shared/hooks';
import { CloseClearButton } from '@shared/ui';

export const ProductsSearch = () => {
  const { classes } = useStyles();
  const { t: tWidget } = useTranslate({ keyPrefix: 'widget' });

  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const searchQuery = useStore($searchQuery);
  const isStale = query !== deferredQuery;

  useEffect(() => {
    setQuerySearch(deferredQuery);
  }, [deferredQuery]);

  const products = useQueryProducts();

  if (!products.data) {
    return null;
  }

  return (
    <Box className={classes.wrapper}>
      <TextInput
        radius="md"
        type="search"
        value={query}
        className={classes.search}
        icon={<IconSearch size="1rem" />}
        placeholder={tWidget('products.search-placeholder')}
        rightSection={<>{isStale && <Loader size="xs" color="gray.5" />}</>}
        onChange={(e) => setQuery(e.currentTarget.value)}
      />

      {!isStale && searchQuery && (
        <Box className={classes.right}>
          {/* {!isStale && <Loader size="xs" />} */}
          <CloseClearButton onClick={() => setQuery('')} />
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
    right: {
      position: 'absolute',
      top: '50%',
      right: theme.spacing['4'],
      color: theme.colors.gray[5],
      transform: 'translateY(-50%)',
    },
  };
});
