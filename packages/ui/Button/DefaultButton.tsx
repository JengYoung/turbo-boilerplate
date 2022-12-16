import React from 'react';

import { Button, VStack } from '@chakra-ui/react';

interface ButtonPropsInterface {
  size: 'xs' | 'sm' | 'md' | 'lg';
  isLoading: boolean;
  children: React.ReactNode;
}

export const DefaultButton = ({ size, isLoading = false, children }: ButtonPropsInterface) => {
  return (
    <Button isLoading={isLoading} size={size}>
      {children}
      <VStack>wefewwe</VStack>
      <div></div>
    </Button>
  );
};
