import './reset.css';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import GlobalStyle from './reset.css';

import {
  SimpleTable,
  TableWithCheckbox,
  SimpleGrid,
  GridDraggable,
} from './examples';

storiesOf('Table', module)
  .add('Simple', () => <SimpleTable />)
  .add('Checkbox', () => (
    <TableWithCheckbox
      onSelectAll={action('onSelectAll')}
      onCheckboxToggle={action('onCheckboxToggle')}
    />
  ))
  .add('Sort', () => <div>Todo</div>)
  .add('Column Replace', () => <div>Todo</div>)
  .add('Draggable', () => <div>Todo</div>)
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
