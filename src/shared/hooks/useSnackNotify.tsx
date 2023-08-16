import React from 'react';

import { IconCheck, IconInfoCircle } from '@tabler/icons-react';

import { useMantineTheme } from '@mantine/core';
import { notifications } from '@mantine/notifications';

import { ErrorType } from '@shared/types';

export const useSnackNotify = () => {
  const sx = { alignItems: 'start' };
  const { colors } = useMantineTheme();

  return {
    clear: () => notifications.clean(),
    error: ({ title = 'Error', message, autoClose = false }: NotifyProps) => {
      notifications.show({
        title,
        message,
        autoClose,
        color: 'red.0',
        icon: <IconInfoCircle size="1rem" color={colors.red[6]} />,
        sx: { ...sx },
      });
    },
    success: ({ title = 'Success', message, autoClose = true }: NotifyProps) => {
      notifications.show({
        title,
        message,
        autoClose,
        color: 'green.0',
        icon: <IconCheck size="1rem" color={colors.green[6]} />,
        sx: { ...sx },
      });
    },
  };
};

interface NotifyProps {
  title?: string;
  message?: ErrorType | string;
  autoClose?: boolean | number;
}
