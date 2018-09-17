import styled, { css } from 'styled-components';
import { FlexCol, FlexRow } from '../globals';

export const Table = styled(FlexCol)`
  position: relative;
  overflow: none;
  height: 100%;
  width: 100%;
`;

export const TableBody = styled(FlexCol)`
  flex: 1 1 auto;
  overflow-x: auto;
  padding: 0 5px;
`;

export const FixedTableHead = styled(FlexRow)`
  flex: 0 0 auto;
  height: auto;
  background: white;
  color: ${({ theme }) => theme.text.alt};
  border-bottom: 1px solid ${({ theme }) => theme.bg.border};
  padding: 0 5px;
  font-size: 12px;
`;

export const HeadRowItem = styled.div`
  display: flex;
  text-transform: uppercase;
  height: 46px;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
`;

export const Row = styled(FlexRow)`
  flex: 0 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.bg.wash};
  &:hover {
    background: ${({ selectable }) => selectable && '#4286f4'};
    color: white;
  }
`;

export const RowItem = styled.div`
  display: flex;
  flex: ${({ flex }) => flex};
  height: 46px;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  background: ${({ checked, theme }) =>
    checked ? 'rgba(66,134,244,0.1)' : null};
  cursor: ${({ cursor }) => (cursor ? cursor : 'default')};
`;

export const HeadCellMenuPopup = styled.ul`
  max-height: 230px;
  overflow-x: auto;
`;
