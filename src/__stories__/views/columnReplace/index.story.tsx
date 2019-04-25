import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ShowDocs from '../../../utils/ShowDocs';
import { sort } from 'ramda';
import DataBrowser, { getObjectPropertyByString } from '../../../index';
import fieldReducer from './fieldReducer';
import { View } from '../../components/globals';
import useData from '../../hooks/useData';
import {
  TableHead,
  HeadRowItem,
  TableBody,
  TableRow,
  TableRowItem,
} from '../../components/table';

const columns = [
  { label: 'name', sortField: 'name', isLocked: true },
  { label: 'user name', sortField: 'username' },
  { label: 'email', sortField: 'email' },
  { label: 'street', sortField: 'address.street' },
];

function Demo({ onTableRowClick, onToggleSort }) {
  const { data } = useData();
  return (
    <DataBrowser
      columns={columns}
      totalItems={data.length}
      // on trigger log
      onToggleSort={field => onToggleSort(`${field.sortField}-${field.dir}`)}
    >
      {({ columnFlex, visibleColumns, defaultSortMethod, toggleSort }) => (
        <View>
          <TableHead>
            {visibleColumns.map((cell, index) => (
              <HeadRowItem
                key={index}
                selected={cell}
                flex={columnFlex[index]}
                onClick={() => toggleSort({ sortField: cell.sortField })}
              >
                {cell.label}
              </HeadRowItem>
            ))}
          </TableHead>
          <TableBody>
            {sort(defaultSortMethod, data).map((row, key) => (
              <TableRow key={key} selectable>
                {visibleColumns.map(({ sortField, isLocked }, index) => (
                  <TableRowItem
                    key={sortField}
                    flex={columnFlex[index]}
                    cursor="pointer"
                    onClick={() => onTableRowClick(`row id ${row.id}`)}
                  >
                    {isLocked && `🔒 `}
                    {fieldReducer(
                      getObjectPropertyByString(row, sortField),
                      sortField,
                    )}
                  </TableRowItem>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </View>
      )}
    </DataBrowser>
  );
}

storiesOf('column replace', module)
  .add('Docs', () => <ShowDocs md={require('../../../../docs/sample.md')} />)
  .add('Demo', () => (
    <Demo
      onTableRowClick={action('onTableRowClick')}
      onToggleSort={action('onToggleSort')}
    />
  ));
