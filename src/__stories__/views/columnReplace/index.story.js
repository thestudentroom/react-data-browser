import React from 'react';
import axios from 'axios';
import { storiesOf } from '@storybook/react';
import ShowDocs from '../../../utils/ShowDocs';
import DataBrowser, { getObjectPropertyByString } from '../../../index';
import fieldReducer from './fieldReducer';
import { View } from '../../components/globals';
import useRows from '../../hooks/useRows';
import {
  TableHead,
  HeadRowItem,
  TableBody,
  TableRow,
  TableRowItem,
} from '../../components/table';

function Demo() {
  const { data, loading } = useRows();
  return (
    <DataBrowser
      totalItems={data.length}
      columns={[
        { label: 'name', sortField: 'name', isLocked: true },
        { label: 'user name', sortField: 'username' },
        { label: 'email', sortField: 'email' },
        { label: 'street', sortField: 'address.street' },
      ]}
    >
      {({ columnFlex, visibleColumns }) => (
        <View>
          <TableHead>
            {visibleColumns.map((cell, index) => (
              <HeadRowItem key={index} selected={cell} flex={columnFlex[index]}>
                {cell.label}
              </HeadRowItem>
            ))}
          </TableHead>
          <TableBody>
            {data.map((row, key) => (
              <TableRow key={key} selectable>
                {visibleColumns.map(({ label, sortField, isLocked }, index) => (
                  <TableRowItem
                    key={sortField}
                    flex={columnFlex[index]}
                    cursor="pointer"
                    onClick={() => alert(`🦄 clicked on a row (id) ${row.id}`)}
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
  .add('Demo', () => <Demo />);
