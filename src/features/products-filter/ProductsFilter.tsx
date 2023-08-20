import { useStore } from 'effector-react';

import { Checkbox, createStyles, Group, Menu, Text } from '@mantine/core';

import { $filterBy, addFilterBy, IDevice } from '@entities/products/model';

import { useTranslate } from '@shared/hooks';
import { CloseClearButton } from '@shared/ui';

export const ProductsFilter = ({ products }: ProductsFilterProps) => {
  const { classes } = useStyles();

  const { t: tWidget } = useTranslate({ keyPrefix: 'widget' });
  const { t: tBase } = useTranslate({ keyPrefix: 'base' });

  const filterBy = useStore($filterBy);

  const lineNames = getLineNames(products);

  return (
    <Menu shadow="lg" trigger="hover" radius="md" position="bottom-end" width="16rem" closeOnItemClick={false} opened={true}>
      <Menu.Target>
        <Text className={classes.target}>{tWidget('products.filter')}</Text>
      </Menu.Target>

      <Menu.Dropdown>
        {/* TODO is this necessary ? */}
        {/* <Menu.Label> */}
        {/*  <Text fz="md">{tWidget('products.filter')}</Text> */}
        {/* </Menu.Label> */}
        {/* <Menu.Divider /> */}

        <Menu.Label>
          <Group position="apart">
            <Text fw={700} fz="md" color="dark" pt="sm" pb="xs">
              {tWidget('products.product-line')}
            </Text>

            {filterBy.length && <CloseClearButton onClick={() => addFilterBy([])} title={tBase('clear')} />}
          </Group>
        </Menu.Label>

        <Checkbox.Group className={classes.group} value={filterBy} onChange={(values) => addFilterBy(values)}>
          {lineNames.map((name) => (
            <Checkbox key={name} className={classes.checkbox} label={name} radius="sm" value={name} color="brand.7" pl="sm" />
          ))}
        </Checkbox.Group>
      </Menu.Dropdown>
    </Menu>
  );
};

const getLineNames = (products: IDevice[]) => {
  return products.reduce((acc: string[], curr: IDevice) => {
    const lineName = curr.line.name;

    if (!acc.includes(lineName)) {
      acc.push(lineName);
    }

    return acc;
  }, []);
};

interface ProductsFilterProps {
  products: IDevice[];
}

const useStyles = createStyles((theme) => {
  return {
    group: {
      height: '21rem',
      overflow: 'auto',
    },
    target: {
      cursor: 'pointer',
    },
    checkbox: {
      borderRadius: theme.radius.sm,
      transition: 'background-color .2s easy',
      '&:hover': {
        backgroundColor: theme.colors.gray[1],
      },
      '.mantine-Checkbox-body': {
        alignItems: 'center',
      },
      '.mantine-Checkbox-labelWrapper': {
        width: '100%',
      },
      label: {
        width: '100%',
        paddingTop: theme.spacing.sm,
        paddingBottom: theme.spacing.sm,
      },
    },
  };
});
