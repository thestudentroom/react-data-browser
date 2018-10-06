import './reset.css';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import GlobalStyle from './reset.css';

import {
  SimpleTable,
  Sortable,
  TableWithCheckbox,
  SimpleGrid,
  GridDraggable,
  TableDraggable,
  ColumnReplace,
} from './examples';

storiesOf('Table', module)
  .add('Simple', () => <SimpleTable />)
  .add('Checkbox', () => (
    <TableWithCheckbox
      onSelectAll={action('onSelectAll')}
      onCheckboxToggle={action('onCheckboxToggle')}
    />
  ))
  .add('Sort', () => <Sortable />)
  .add('Column Replace', () => <ColumnReplace />)
  .add('Draggable', () => <TableDraggable />)
  .add('React Virtualized', () => <div>Todo</div>);

storiesOf('Grid', module)
  .add('Checkbox', () => (
    <SimpleGrid
      onSelectAll={action('onSelectAll')}
      onCheckboxToggle={action('onCheckboxToggle')}
    />
  ))
  .add('Sort', () => <div>Todo</div>)
  .add('Draggable', () => <GridDraggable />)
  .add('React Virtualized', () => <div>Todo</div>);
