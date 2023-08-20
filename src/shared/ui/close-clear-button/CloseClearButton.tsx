import { IconX } from '@tabler/icons-react';

import { ActionIcon, createStyles, Text } from '@mantine/core';

export const CloseClearButton = ({ onClick, title }: ClearFilterButtonProps) => {
  const { classes, cx } = useStyles();

  return (
    <ActionIcon className={cx(classes.clear)} variant="transparent" onClick={onClick}>
      {title ? <Text>{title}</Text> : <IconX size="1rem" />}
    </ActionIcon>
  );
};

interface ClearFilterButtonProps {
  title?: string;
  onClick: () => void;
}

const useStyles = createStyles((theme) => {
  return {
    clear: {
      color: theme.colors.gray[5],
    },
  };
});
