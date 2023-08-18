import { Anchor, Box, createStyles, Flex, Group, Text } from '@mantine/core';

import { Logo } from '@shared/ui';

export const Header = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.header} component="header">
      <Flex align="center">
        <Logo />
        <Group position="apart" w="100%" pr={28} pl={28}>
          <Text fz="xl">Devices</Text>
          <Text>
            Author |{' '}
            <Anchor href="https://github.com/kasapvictor/ubiquiti-test" target="_blank">
              Victor Kasap
            </Anchor>
          </Text>
        </Group>
      </Flex>
    </Box>
  );
};

const useStyles = createStyles((theme) => {
  return {
    header: {
      minHeight: theme.spacing['56'],
      backgroundColor: theme.colors.gray[0],
      color: theme.colors.gray[8],
    },
  };
});
