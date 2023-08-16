import { Global, rem } from '@mantine/core';

// import { log } from '@shared/lib';

import { MODE } from './constants';

export const GlobalStyles = () => {
  return (
    <Global
      styles={(theme) => {
        // log(theme);

        return {
          '*': {
            margin: 0,
            padding: 0,
            verticalAlign: 'baseline',
            boxSizing: 'border-box',
          },
          html: {
            height: '100%',
            textSizeAdjust: '100%',
            msTextSizeAdjust: '100%',
            webkitTextSizeAdjust: '100%',
            mozTextSizeAdjust: '100%',
          },
          body: {
            height: '100%',
            webkitFontSmoothing: 'antialiased',
            overflowY: 'scroll',
          },
          'img, picture, video, canvas, svg': {
            display: 'block',
            maxWidth: '100%',
          },
          'p, h1, h2, h3, h4, h5, h6': {
            overflowWrap: 'break-word',
          },
          td: {
            verticalAlign: 'middle',
          },
          '#root': {
            height: '100%',
          },
          '&*': {
            scrollbarWidth: 'thin',
            scrollbarColor: `${theme.colors.gray[2]} transparent`,
          },
          '&::-webkit-scrollbar': {
            width: rem(8),
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: theme.colors.gray[2],
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: theme.colors.gray[2],
          },
          'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active': {
            WebkitBoxShadow: `0 0 0 30px ${theme.colorScheme === MODE.LIGHT ? theme.white : theme.black} inset !important`,
          },
          'input:-webkit-autofill:disabled': {
            WebkitBoxShadow: `0 0 0 30px ${theme.colorScheme === MODE.LIGHT ? theme.colors.gray[0] : theme.black} inset !important`,
          },
          '.mantine-ColorInput-dropdown': {
            padding: theme.spacing.sm,
          },
        };
      }}
    />
  );
};
