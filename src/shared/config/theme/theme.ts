import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  fontFamily: 'Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
  primaryColor: 'brand',
  defaultRadius: '1rem',
  cursorType: 'pointer',
  black: '#212529',
  white: '#FFFFFF',
  primaryShade: {
    light: 9,
    dark: 7,
  },
  fontSizes: {
    '2xl': '1.5rem',
  },
  shadows: {
    '2xl': '0 0.5rem 3.125rem rgba(0, 0, 0, 0.05)',
  },
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
    red: ['#fff0f0', '#ffddde', '#ffc0c2', '#ff9497', '#ff575b', '#ff2329', '#ed0006', '#d70005', '#b10307', '#920a0d'],
    green: ['#ecfdf3', '#d1fadf', '#a8f2c6', '#6fe6a7', '#36d183', '#12b76a', '#079455', '#057747', '#075e3a', '#074d32'],
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
