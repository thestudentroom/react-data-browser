import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  space,
  width,
  fontSize,
  color,
  flex,
  alignItems,
  justifyContent,
  flexDirection,
} from 'styled-system';

export const Flex = styled.div`
  display: flex;
  /*  */
  ${flex}
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  /*  */
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  position: relative;
  overflow: none;
  width: 100%;
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

export const Transition = {
  hover: {
    on: 'all 0.2s ease-in',
    off: 'all 0.2s ease-out',
  },
  reaction: {
    on: 'all 0.15s ease-in',
    off: 'all 0.1s ease-out',
  },
  dropdown: {
    off: 'all 0.35s ease-out',
  },
};

export const Grid = ({ children }) => <RootGrid>{children}</RootGrid>;
