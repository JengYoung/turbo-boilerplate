import React from 'react';

import { ChakraProvider } from "@chakra-ui/react";
const theme = {};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

/**
 * @description
 * don't use addon @chakra-ui/storybook-addon.
 * It cannot use in builder-vite now. (22.12.15)
 * 
 * @see: https://github.com/chakra-ui/chakra-ui/issues/6433
 */
// add chakra provider in storybook
export const decorators = [
  (Story) => 
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ,
];
