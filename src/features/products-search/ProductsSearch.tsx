import { IconSearch, IconX } from '@tabler/icons-react';
import { useStore } from 'effector-react';

import { ActionIcon, Autocomplete, Box, createStyles } from '@mantine/core';

import { $searchQuery, setQuerySearch, useQueryProducts } from '@entities/products/model';

export const ProductsSearch = () => {
  const { classes } = useStyles();
  const searchQuery = useStore($searchQuery);

  // FIXME add useDeferredValue

  const products = useQueryProducts();

  if (!products.data) {
    return null;
  }

  const autoCompleteData = products.data.devices.map((device) => device.shortnames).flat();

  return (
    <Box className={classes.wrapper}>
      <Autocomplete
        name="q"
        radius="md"
        type="search"
        value={searchQuery}
        placeholder="Search"
        data={autoCompleteData}
        maxDropdownHeight="25rem"
        className={classes.autocomplete}
        icon={<IconSearch size="1rem" />}
        limit={products.data.devices.length}
        onChange={(query) => setQuerySearch(query)}
      />
      <ActionIcon className={classes.clear} onClick={() => setQuerySearch('')} variant="transparent">
        <IconX size="1rem" />
      </ActionIcon>
    </Box>
  );
};

const useStyles = createStyles((theme) => {
  return {
    wrapper: {
      position: 'relative',
    },
    autocomplete: {
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
