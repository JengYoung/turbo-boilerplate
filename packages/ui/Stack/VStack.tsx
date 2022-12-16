import styled from '@emotion/styled';

import { StackPropsInterface, StackStyledInterface } from './types';

const Styles = {
  Container: styled.div<StackStyledInterface>`
    display: flex;
    align-items: center;
  `,
};

const VStack = ({ children, center = false }: StackPropsInterface) => {
  return <Styles.Container center={center}>{children}</Styles.Container>;
};

export default VStack;
