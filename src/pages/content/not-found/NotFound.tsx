import { IconArrowNarrowRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { createStyles, Flex, rem, Text, Title, useMantineTheme, Anchor } from '@mantine/core';

import { useTranslate } from '@shared/hooks';

const NotFound = () => {
  const { classes } = useStyles();
  const { t: tNotFound } = useTranslate({ keyPrefix: 'not-found' });

  return (
    <Flex gap={20} direction="column" align="center" pt={80}>
      <Title order={1} className={classes.title}>
        {tNotFound('title')}
      </Title>
      <Title order={2}>{tNotFound('subtitle')}</Title>
      <Text className={classes.description} align="center" color="dimmed">
        {tNotFound('description')}
      </Text>
      <Anchor component={Link} to={`/`} size="md">
        <Flex gap={2} justify="center" align="center">
          {tNotFound('link')} <IconArrowNarrowRight size={rem(16)} />
        </Flex>
      </Anchor>
    </Flex>
  );
};

const useStyles = createStyles(() => {
  const { colors } = useMantineTheme();

  return {
    title: {
      fontWeight: 800,
      fontSize: rem(220),
      color: colors.gray[6],
    },
    description: {
      maxWidth: rem(500),
    },
  };
});

export default NotFound;
