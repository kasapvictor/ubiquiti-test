import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  fontFamily: 'Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
  primaryColor: 'brand',
  defaultRadius: '1rem',
  cursorType: 'pointer',
  black: '#212529',
  white: '#FFFFFF',
  primaryShade: {
    light: 9,
    dark: 7,
  },
  fontSizes: {},
  shadows: {},
  spacing: {
    '2': '0.125rem',
    '4': '0.25rem',
    '6': '0.375rem',
    '8': '0.5rem',
    '28': '1.75rem',
    '32': '2rem',
    '56': '3.5rem',
  },
  colors: {
    brand: ['#EDF2FF', '#DBE4FF', '#BAC8FF', '#91A7FF', '#748FFC', '#5C7CFA', '#4C6EF5', '#4263EB', '#3B5BDB', '#364FC7'],
    gray: ['#f6f6f7', '#eef0f1', '#e0e2e5', '#ccd1d5', '#b6bbc3', '#a3a7b1', '#8d919e', '#838691', '#64676f', '#53555c'],
  },
  // other: {
  //   colors: {
  //     primary: '#4263EB',
  //   },
  // },
  // components: {
  // Anchor: {
  //   defaultProps: (theme) => ({
  //     color: theme.colorScheme === 'light' ? '#f03e3e' : '#fcc419',
  //   }),
  // },
  // },
};
