import { Box, Text, createStyles, Image } from '@mantine/core';

import { log } from '@shared/lib';

export const Product = ({ iconSrc, line, name, id, isRowView }: ProductProps) => {
  const { classes, cx } = useStyles();

  log({ iconSrc, line, name, id });

  return (
    <Box className={cx(classes.product, { [classes.productRow]: isRowView, [classes.productCard]: !isRowView })}>
      <Image className={cx(classes.image, { [classes.imageRow]: isRowView, [classes.imageCard]: !isRowView })} alt={name} src={iconSrc} />
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
  isRowView: boolean;
}
