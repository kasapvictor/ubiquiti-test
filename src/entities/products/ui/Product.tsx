import { Box, createStyles } from '@mantine/core';

export const Product = ({ deviceId }: ProductProps) => {
  const { classes, cx } = useStyles();

  return <Box className={cx(classes.card)}>{deviceId}</Box>;
};

const useStyles = createStyles(() => {
  return {
    card: {},
  };
});

interface ProductProps {
  deviceId: string;
}
