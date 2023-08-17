import { Global } from '@mantine/core';

import bold from './assets/fonts/Lato/Lato-Bold.ttf';
import light from './assets/fonts/Lato/Lato-Light.ttf';
import regular from './assets/fonts/Lato/Lato-Regular.ttf';

export const CustomFonts = () => {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Lato',
            src: `url("${light}") format("truetype")`,
            fontWeight: 300,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Lato',
            src: `url("${regular}") format("truetype")`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Lato',
            src: `url("${bold}") format("truetype")`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
};
