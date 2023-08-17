import '@emotion/react';
import { Tuple, DefaultMantineColor } from '@mantine/core';

type ExtendedCustomColors = 'brand' | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }

  export interface MantineThemeShadowsOverride {
    shadows: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl', string>;
  }
}
