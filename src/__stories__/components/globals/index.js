import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const RootView = styled(FlexCol)`
  position: relative;
  overflow: none;
  width: 100vw;
  height: 100%;
`;

export const View = ({ children }) => (
  <ThemeProvider theme={{}}>
    <RootView>{children}</RootView>
  </ThemeProvider>
);

const RootGrid = styled.section`
  display: grid;
  align-content: flex-start;
  overflow-x: auto;
  grid-gap: 15px;
  padding: 15px;
  height: 100%;
  grid-template-columns: repeat(auto-fill, minmax(260px, auto));
`;

export const Grid = ({ children }) => <RootGrid>{children}</RootGrid>;
