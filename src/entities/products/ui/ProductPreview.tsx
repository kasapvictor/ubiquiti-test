import { Box, Text, createStyles, Image } from '@mantine/core';

import { log } from '@shared/lib';

export const ProductPreview = ({ iconSrc, line, name, id, isListView }: ProductProps) => {
  const { classes, cx } = useStyles();

  log({ iconSrc, line, name, id });

  return (
    <Box className={cx(classes.product, { [classes.productRow]: isListView, [classes.productCard]: !isListView })}>
      <Image
        alt={name}
        src={iconSrc}
        withPlaceholder
        className={cx(classes.image, { [classes.imageRow]: isListView, [classes.imageCard]: !isListView })}
      />
      <Text>{line}</Text>
      <Text>{name}</Text>
    </Box>
  );
};

const useStyles = createStyles(() => {
  return {
    product: {},
    productRow: {
      display: 'grid',
      gridTemplateColumns: '8.5rem 15.875rem 1fr',
      alignItems: 'center',
    },
    productCard: {
      display: 'grid',
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
    imageCard: {},
  };
});

interface ProductProps {
  id: string;
  iconSrc: string;
  line: string;
  name: string;
  isListView: boolean;
}
