import React from "react";

import { ThemeProvider } from "@emotion/react";
import { globalTheme } from "./globalTheme";
import { Global } from "@emotion/react";
import { globalStyle } from "./globalStyle";

export function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={globalTheme}>
      <Global styles={globalStyle} />
      {children}
    </ThemeProvider>
  );
}
