import { Box } from '@mantine/core';

import { IDevice } from '@entities/products';

export const Product = ({ device }: { device: IDevice }) => {
  return <Box>{device.id}</Box>;
};
