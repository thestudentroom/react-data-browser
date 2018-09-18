import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FlexCol } from './styles';

export const Root = styled(FlexCol)`
  position: relative;
  overflow: none;
  width: 100vw;
  height: 100%;
`;

export const Table = ({ children }) => (
  <ThemeProvider theme={{}}>
    <Root>{children}</Root>
  </ThemeProvider>
);

export * from './styles';
