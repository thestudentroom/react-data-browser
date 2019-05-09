import * as React from 'react';
import { sort } from 'ramda';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ShowDocs from '../../utils/ShowDocs';
import { getObjectPropertyByString } from '../../index';
import { View } from '../../__components__/globals';
import {
  TableHead,
  HeadRowItem,
  TableBody,
  Row,
  RowItem,
} from '../../__components__/table';
import { BaseTable } from '../base';
import fieldReducer from './fieldReducer';
import { Checkbox } from '../../__components__/formElements';
import { HeadCell } from '../../__components__/table/components/HeadCell';

function Demo({
  onTableRowClick,
  onToggleSort,
  onCheckboxToggle,
  onSelectAll,
  onDeselectAll,
  onSortData,
}) {
  const fixedColWidth = 40;
  return (
    <BaseTable
      onToggleSort={onToggleSort}
      onCheckboxToggle={onCheckboxToggle}
      onSelectAll={onSelectAll}
      onDeselectAll={onDeselectAll}
      onSortData={onSortData}
    >
      {(
        data,
        {
          columnFlex,
          visibleColumns,
          defaultSortMethod,
          toggleSort,
          checkboxState,
          checkboxToggle,
          selectAllCheckboxState,
          onSelection,
        },
      ) => {
        return (
          <View>
            {/* HEAD */}
            <TableHead>
              {/* Head Columns */}
              <HeadCell
                flex="0 0 auto"
                selected
                style={{
                  position: 'relative',
                  width: fixedColWidth,
                }}
                render={() => (
                  <Checkbox
                    selectAllCheckboxState={selectAllCheckboxState}
                    disabled={false}
                    onChange={() => {
                      onSelection({
                        items: data.map(row => row.id),
                      });
                    }}
                  />
                )}
              />
              {visibleColumns.map((cell, index) => (
                <HeadCell
                  key={index}
                  selected={cell}
                  flex={columnFlex[index]}
                  style
                  // onClick={() => toggleSort({ sortField: cell.sortField })}
                  render={props => <div {...props}>{cell.label}</div>}
                />
              ))}
            </TableHead>
            {/* BODY */}
            <TableBody>
              {sort(defaultSortMethod, data).map((row, key) => (
                <Row key={key} selectable>
                  <RowItem style={{ width: fixedColWidth }} flex="0 0 auto">
                    <Checkbox
                      id={row.id}
                      checked={checkboxState(row.id)}
                      onChange={() => {
                        checkboxToggle({ rowId: row.id });
                      }}
                    />
                  </RowItem>
                  {visibleColumns.map(
                    ({ label, sortField, isLocked }, index) => (
                      <RowItem
                        key={sortField}
                        flex={columnFlex[index]}
                        checked={checkboxState(row.id)}
                        onClick={() => onTableRowClick(`row id ${row.id}`)}
                      >
                        {fieldReducer(
                          getObjectPropertyByString(row, sortField),
                          sortField,
                          row,
                        )}
                      </RowItem>
                    ),
                  )}
                </Row>
              ))}
            </TableBody>
          </View>
        );
      }}
    </BaseTable>
  );
}

storiesOf('features', module)
  .add('Docs', () => <ShowDocs md={require('../../../docs/sample.md')} />)
  .add('Demo', () => (
    <Demo
      onSelectAll={action('onSelectAll')}
      onDeselectAll={action('onDeselectAll')}
      onCheckboxToggle={action('onCheckboxToggle')}
      onTableRowClick={action('onTableRowClick')}
      onToggleSort={action('onToggleSort')}
      onSortData={action('onSortData')}
    />
  ));
