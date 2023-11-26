import { PropsWithChildren } from 'react';

import { Box, createStyles, Flex, Group, Image, Modal, useMantineTheme, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { IDevice } from '@entities/products/model';

import { getIconSource, log } from '@shared/lib';

export const ProductDetails = ({ children, device }: ProductDetailsProps) => {
  const { classes } = useStyles();

  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);

  log('device', device);

  const iconSrc = getIconSource({ iconId: device.icon.id, resolutions: device.icon.resolutions });

  const overlay = {
    blur: 3,
    opacity: 0.55,
    color: theme.colors.gray[2],
  };

  return (
    <>
      <Modal className={classes.modal} opened={opened} title={device.product.name} onClose={close} overlayProps={overlay} fullScreen>
        <Flex justify="center" align="center" w="100%" h="100%">
          <Group spacing="2rem">
            <Image className={classes.image} src={iconSrc} width="15rem"></Image>
            <Flex direction="column" className={classes.details}>
              <Group position="apart" className={classes.item}>
                <Text>Product line</Text>
                <Text>{device.line.name}</Text>
              </Group>
              <Group position="apart" className={classes.item}>
                <Text>ID</Text>
                <Text>{device.line.id}</Text>
              </Group>
              <Group position="apart" className={classes.item}>
                <Text>Name</Text>
                <Text>{device.product.name}</Text>
              </Group>
            </Flex>
          </Group>
        </Flex>
      </Modal>

      <Box onClick={open}>{children}</Box>
    </>
  );
};

interface ProductDetailsProps extends PropsWithChildren {
  device: IDevice;
}

const useStyles = createStyles((theme) => {
  return {
    modal: {
      '.mantine-Modal-content': {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '3.5rem',
      },
      '.mantine-Modal-header': {
        borderBottom: `1px solid ${theme.colors.gray[1]}`,
        justifyContent: 'flex-start',
        position: 'relative',
        '.mantine-Modal-close': {
          marginLeft: 0,
        },
        '.mantine-Modal-title': {
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        },
      },
      '.mantine-Modal-body': {
        height: '100%',
      },
    },
    image: {
      [theme.fn.smallerThan('md')]: {
        margin: '0 auto',
      },
    },
    details: {
      width: '25rem',
      [theme.fn.smallerThan('md')]: {
        width: '100%',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
      },
    },
    item: {
      paddingTop: theme.spacing.xs,
      paddingBottom: theme.spacing.xs,
      borderBottom: `1px solid ${theme.colors.gray[1]}`,
      color: theme.colors.gray[9],
    },
  };
});
