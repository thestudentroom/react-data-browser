import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render } from 'react-testing-library';
import { getObjectPropertyByString } from '../utils';
import DataBrowser from '../';
import mockColumns from '../__mocks__/columns';
import mockData from '../__mocks__/data';

test('should return visibleColumns in shape of columnFlex', () => {
  const { columnFlex, visibleColumns } = setup({
    initialColumnFlex: ['0 0 25%', '1 1 55%', '0 0 20%'],
  });
  expect(visibleColumns.length).toEqual(columnFlex.length);
});

test('switchViewType should switch to selected available view', () => {
  const handleStateChange = jest.fn();
  const { switchViewType } = setup({
    onStateChange: handleStateChange,
    viewsAvailable: ['LIST_VIEW', 'GRID_VIEW'],
  });
  const viewType = { viewType: 'GRID_VIEW' };
  switchViewType(viewType);
  const changes = {
    type: DataBrowser.stateChangeTypes.switchView,
    ...viewType,
  };
  expect(handleStateChange).toHaveBeenCalledTimes(1);
  expect(handleStateChange).toHaveBeenLastCalledWith(
    changes,
    expect.objectContaining({ viewType: changes.viewType }),
  );
});

test('switchColumns should switch column accordingly', () => {
  const handleStateChange = jest.fn();
  const { switchColumns } = setup({ onStateChange: handleStateChange });
  switchColumns({ from: 'name', to: 'body' });
  const changes = {
    type: DataBrowser.stateChangeTypes.switchColumns,
    visibleColumns: [
      { label: 'item id', sortField: 'id', isLocked: true },
      { label: 'post id', sortField: 'postId', visible: true },
      { label: 'body', sortField: 'body', visible: false },
      { label: 'email', sortField: 'email', visible: true },
    ],
  };
  expect(handleStateChange).toHaveBeenCalledTimes(1);
  expect(handleStateChange).toHaveBeenLastCalledWith(
    changes,
    expect.objectContaining({ visibleColumns: changes.visibleColumns }),
  );
});

test('replaceColumnFlex should replace columns with chosen set of cols', () => {
  const handleStateChange = jest.fn();
  const initialColumnFlex = [
    ['0 0 25%', '1 1 75%'],
    ['0 0 25%', '1 1 55%', '0 0 20%'],
    ['0 0 20%', '1 1 40%', '0 0 20%', '0 0 20%'],
  ];
  const { columnFlex, availableColumnFlex, replaceColumnFlex } = setup({
    initialColumnFlex: initialColumnFlex,
    onStateChange: handleStateChange,
  });

  const selectedColFlex = availableColumnFlex[1];
  replaceColumnFlex({ columnFlex: selectedColFlex });

  const changes = {
    columnFlex: selectedColFlex,
    type: DataBrowser.stateChangeTypes.replaceColumnFlex,
    visibleColumns: [
      { label: 'item id', sortField: 'id', isLocked: true },
      { label: 'post id', sortField: 'postId', visible: true },
      { label: 'name', sortField: 'name', visible: true },
    ],
  };

  expect(columnFlex.toString()).toEqual(initialColumnFlex[0].toString());
  expect(availableColumnFlex.toString()).toEqual(initialColumnFlex.toString());
  expect(handleStateChange).toHaveBeenCalledTimes(1);
  expect(handleStateChange).toHaveBeenLastCalledWith(
    changes,
    expect.objectContaining({
      visibleColumns: changes.visibleColumns,
    }),
  );
});

test('checkboxState should check if checbox on or off', () => {
  const { checkboxState } = setup({
    checked: [1, 2, 3, 4],
  });
  const result_1 = checkboxState(2);
  expect(result_1).toBeTruthy();
  const result_2 = checkboxState(7);
  expect(result_2).toBeFalsy();
  const result_3 = checkboxState(4);
  expect(result_3).toBeTruthy();
  const result_4 = checkboxState(15);
  expect(result_4).toBeFalsy();
  const result_5 = checkboxState(1);
  expect(result_5).toBeTruthy();
  const result_6 = checkboxState(true);
  expect(result_6).toBeFalsy();
});

test('offsetColumns should get all columns except with isLocked prop', () => {
  const { offsetColumns } = setup();
  const columns = offsetColumns();
  const result = columns
    .map(item => (item.isLocked && 'exist') || false)
    .includes('exist');
  expect(result).toEqual(false);
});

test('offsetColumns objects should contain prop visible', () => {
  const { offsetColumns } = setup();
  const columns = offsetColumns();
  const result = columns
    .map(item => Object.keys(item).includes('visible'))
    .includes(false);
  expect(result).toEqual(false);
});

test('checkboxToggle select when unchecked', () => {
  const handleStateChange = jest.fn();
  const { checkboxToggle } = setup({
    initialChecked: [0, 1, 2, 3, 4],
    totalItems: 6,
    onStateChange: handleStateChange,
  });
  checkboxToggle({ rowId: 5 });
  const changes = {
    type: DataBrowser.stateChangeTypes.checkboxToggle,
    checked: [0, 1, 2, 3, 4, 5],
  };
  expect(handleStateChange).toHaveBeenCalledTimes(1);
  expect(handleStateChange).toHaveBeenLastCalledWith(
    changes,
    expect.objectContaining({ checked: [0, 1, 2, 3, 4, 5] }),
  );
});

test('checkboxToggle select when checked', () => {
  const handleStateChange = jest.fn();
  const { checkboxToggle } = setup({
    initialChecked: [0, 1, 2, 3, 4, 5],
    totalItems: 6,
    onStateChange: handleStateChange,
  });
  checkboxToggle({ rowId: 5 });
  const changes = {
    type: DataBrowser.stateChangeTypes.checkboxToggle,
    selectAllCheckboxState: false,
    checked: [0, 1, 2, 3, 4],
  };
  expect(handleStateChange).toHaveBeenCalledTimes(1);
  expect(handleStateChange).toHaveBeenLastCalledWith(
    changes,
    expect.objectContaining({ checked: changes.checked }),
  );
});

test('onSelection selectAllCheckboxState toggle', () => {
  const handleStateChange = jest.fn();
  const { onSelection } = setup({
    totalItems: 6,
    onStateChange: handleStateChange,
  });
  onSelection({ items: [0, 1, 2, 3, 4, 5] });
  const changes = {
    type: DataBrowser.stateChangeTypes.selectAll,
    selectAllCheckboxState: true,
    checked: [0, 1, 2, 3, 4, 5],
  };
  expect(handleStateChange).toHaveBeenLastCalledWith(
    changes,
    expect.objectContaining({ checked: changes.checked }),
  );
  onSelection();
  const changes2 = {
    type: DataBrowser.stateChangeTypes.deselectAll,
    selectAllCheckboxState: false,
    checked: [],
  };
  expect(handleStateChange).toHaveBeenCalledTimes(2);
  expect(handleStateChange).toHaveBeenLastCalledWith(
    changes2,
    expect.objectContaining({ checked: [] }),
  );
});

test('changeSortDirection', () => {
  const handleStateChange = jest.fn();
  const { changeSortDirection } = setup({
    initialSort: { dir: 'asc', sortField: '_id' },
    onStateChange: handleStateChange,
  });
  changeSortDirection({ dir: 'dsc' });
  const changes = {
    type: DataBrowser.stateChangeTypes.changeSortDirection,
    currentSort: {
      dir: 'dsc',
      sortField: '_id',
    },
  };
  expect(handleStateChange).toHaveBeenCalledTimes(1);
  expect(handleStateChange).toHaveBeenLastCalledWith(
    changes,
    expect.objectContaining({ currentSort: changes.currentSort }),
  );
});

test('defaultSortMethod', () => {});
test('sortData', () => {});
test('activeSort', () => {});

function setup({
  render: renderFn = () => <div />,
  columns = mockColumns,
  ...props
} = {}) {
  let renderArg;
  const childrenSpy = jest.fn(controllerArg => {
    renderArg = controllerArg;
    return renderFn(controllerArg);
  });
  const utils = render(
    <DataBrowser columns={columns} {...props}>
      {childrenSpy}
    </DataBrowser>,
  );
  return { childrenSpy, ...utils, ...renderArg };
}
