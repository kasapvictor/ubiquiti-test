import { useStore } from 'effector-react';

import { Box, createStyles, Image, Text } from '@mantine/core';

import { $viewMode, addProductSelectedId, ProductsViewMode } from '@entities/products/model';

import { getIconSource, IconSize } from '@shared/lib';

export const ProductPreview = ({ iconResolutions, iconId, line, name, id }: ProductProps) => {
  const { classes, cx } = useStyles();

  const viewMode = useStore($viewMode);
  const isListView = viewMode === ProductsViewMode.List;

  const iconSize = isListView ? IconSize.Small : IconSize.Normal;
  const iconSrc = getIconSource({ iconId, resolutions: iconResolutions, iconSize });

  return (
    <Box
      className={cx(classes.product, {
        [classes.productRow]: isListView,
        [classes.productCard]: !isListView,
      })}
      onClick={() => addProductSelectedId(id)}>
      <Image
        alt={name}
        src={iconSrc}
        height="100%"
        fit="contain"
        className={cx(classes.image, { [classes.imageRow]: isListView, [classes.imageCard]: !isListView })}
      />
      <Text
        pb={isListView ? 0 : 4}
        pt={isListView ? 0 : 'lg'}
        pl={isListView ? 0 : 'sm'}
        pr={isListView ? 0 : 'sm'}
        className={cx({ [classes.nameCard]: !isListView })}>
        {isListView ? line : name}
      </Text>
      <Text color={!isListView ? 'dimmed' : ''} pl={isListView ? 0 : 'sm'} pb={isListView ? 0 : 'md'} size={isListView ? 'md' : 'sm'}>
        {!isListView ? line : name}
      </Text>
    </Box>
  );
};

const useStyles = createStyles((theme) => {
  return {
    product: {},
    productRow: {
      display: 'grid',
      gridTemplateColumns: '8.5rem 15.875rem 1fr',
      alignItems: 'center',
    },
    productCard: {
      display: 'grid',
      height: '100%',
    },
    image: {},
    imageRow: {
      padding: '0.25rem 2.5rem 0.25rem 4.5rem; ',
      figure: {
        width: '1.625rem',
        height: '1.625rem',
        marginLeft: 'auto',
      },
    },
    imageCard: {
      backgroundColor: theme.colors.gray[0],
      figure: {
        width: '14.5rem',
        height: '9rem',
        margin: '0 auto',
        '.mantine-Image-imageWrapper': {
          width: '100%',
          height: '100%',
        },
      },
    },
    nameCard: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  };
});

interface ProductProps {
  id: string;
  line: string;
  name: string;
  iconId: string;
  iconResolutions: [number, number][];
}
