import { Text } from '@mantine/core';

export const Footer = () => {
  return (
    <Text color="dimmed" p="md">
      Created by Victor Kasap {new Date().getFullYear()}
    </Text>
  );
};
