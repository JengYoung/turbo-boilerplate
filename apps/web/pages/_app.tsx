import { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import { CustomThemeProvider } from 'ui';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <CustomThemeProvider>
        <Component {...pageProps} />
      </CustomThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
