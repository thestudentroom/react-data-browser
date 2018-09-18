import './reset.css';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import GlobalStyle from './reset.css';

import { SimpleTable, TableWithCheckbox } from './examples';

storiesOf('Table', module)
  .add('Simple', () => <SimpleTable />)
  .add('With Checkbox', () => (
    <TableWithCheckbox
      onSelectAll={action('onSelectAll')}
      onCheckboxToggle={action('onCheckboxToggle')}
    />
  ));
