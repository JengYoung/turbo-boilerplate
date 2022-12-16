import React from 'react';

import { ThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';

import { globalStyle } from './globalStyle';
import { globalTheme } from './globalTheme';

export function CustomThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={globalTheme}>
      <Global styles={globalStyle} />
      {children}
    </ThemeProvider>
  );
}
