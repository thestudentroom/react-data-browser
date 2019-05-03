import * as React from 'react';
import DataBrowser from '../../index';
import useData from '../../utils/useData';

const columns = [
  { label: 'name', sortField: 'name', isLocked: true },
  { label: 'user name', sortField: 'username' },
  { label: 'email', sortField: 'email' },
  { label: 'street', sortField: 'address.street' },
];

export function BaseTable({ children, onToggleSort, ...rest }) {
  const { data } = useData();
  return (
    <DataBrowser
      columns={columns}
      totalItems={data.length}
      // on trigger log
      onToggleSort={field => onToggleSort(`${field.sortField}-${field.dir}`)}
      children={props => children(data, props)}
      {...rest}
    />
  );
}
