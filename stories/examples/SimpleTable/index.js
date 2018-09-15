import React from 'react';
import DataBrowser from '../../../src';
import data from './data';
import columns from './columns';
import {
  Table,
  FixedTableHead,
  HeadCell,
  RowOptionsCell,
  Row,
  RowItem,
} from './styles';

// Checkbox, IconButton

const fixedColWidth = 40;

export const SimpleTable = () => (
  <DataBrowser totalItems={data.length} columns={columns}>
    {({
      columnFlex,
      visibleColumns,
      selectAllCheckboxState,
      checkboxState,
      onSelection,
      checkboxToggle,
      viewType,
    }) => {
      return (
        <Table>
          <FixedTableHead>
            <HeadCell
              style={{
                flex: '0 0 auto',
                position: 'relative',
                width: fixedColWidth,
              }}
              render={() => (
                <input
                  type="checkbox"
                  position="relative"
                  checked={selectAllCheckboxState}
                  onChange={() =>
                    onSelection({
                      items: this.state.rows.map(item => item.id),
                    })
                  }
                />
              )}
            />
            {visibleColumns.map((cell, index) => (
              <HeadCell
                key={index}
                selected={cell}
                flex={columnFlex[index]}
                render={props => <div {...props}>{cell.label}</div>}
              />
            ))}
            <RowOptionsCell
              head
              width={fixedColWidth}
              render={({ isOpen, ...props }) => (
                <button {...props} color={isOpen ? 'blue' : '#555'}>
                  {viewType === 'LIST_VIEW' ? 'view_list' : 'view_module'}
                </button>
              )}
            />
          </FixedTableHead>
          <TableBody>
            {items.map((row, key) => (
              <Row key={key} selectable>
                <RowItem style={{ width: fixedColWidth }} flex="0 0 auto">
                  <input
                    type="checkbox"
                    id={row.id}
                    checked={checkboxState(row.id)}
                    onChange={() => checkboxToggle({ rowId: row.id })}
                  />
                </RowItem>
                {visibleColumns.map(({ label, sortField, isLocked }, index) => (
                  <RowItem
                    key={sortField}
                    flex={columnFlex[index]}
                    cursor="pointer"
                    checked={checkboxState(row.id)}
                    onClick={() => alert(`🦄 clicked on a row (id) ${row.id}`)}
                  >
                    {isLocked && `🔒 `}
                    {fieldReducer(
                      getObjectPropertyByString(row, sortField),
                      sortField,
                    )}
                  </RowItem>
                ))}
                <RowOptionsCell
                  width={fixedColWidth}
                  checked={checkboxState(row.id)}
                  render={({ isOpen, ...props }) => (
                    <button {...props} color={isOpen ? 'white' : '#999'}>
                      b
                    </button>
                  )}
                />
              </Row>
            ))}
          </TableBody>
        </Table>
      );
    }}
  </DataBrowser>
);
