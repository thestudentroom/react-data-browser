import * as React from 'react'

interface Column {
  label: string,
  sortField: string,
  isLocked?: boolean
}

interface CurrentSort {
  sortDirection: string,
  sortField: string,
}

export interface DataBrowserState<Item> {
  columnFlex: Array<string>,
  availableColumnFlex: Array<string>,
  columns: Array<Column>,
  visibleColumns: Array<Column>,
  viewType: string | null,
  viewsAvailable: Array<string>,
  selectAllCheckboxState: boolean,
  currentSort: CurrentSort,
  checked: boolean | null,
}

export enum StateChangeTypes {
  deselectAll = '__deselect_all__',
  selectAll = '__select_all__',
  checkboxToggle = '__checbox_toggle__',
  switchColumns = '__switch_columns__',
  switchView = '__switch_view__',
  sortData = '__sort_data__',
  onItemClick = '__on_item_select__',
  replaceColumnFlex = '__replace_column_flex__',
  changeSortDirection = '__change_sort_directon__',
}

export interface DataBrowserProps<Item> {
  stateReducer?: (
    state: DataBrowserState<Item>,
    changes: StateChangeOptions<Item>,
  ) => Partial<StateChangeOptions<Item>>
  onStateChange?: (
    options: StateChangeOptions<Item>,
    stateAndHelpers: ControllerStateAndHelpers<Item>,
  ) => void
  // todo params
  onSwitchColumns: () => void,
  onSwitchViewType: () => void,
  onChangeSortDirection: () => void,
  onSortData: () => void,
  onReplaceColumnFlex: () => void,
  onDeselectAll: () => void,
  onSelectAll: () => void,
  onCheckboxToggle: () => void,
  viewsAvailable: Array<string>,
  initialColumnFlex: Array<string>,
  initialChecked: Array<string | number>,
  totalItems: number,
}

export interface StateChangeOptions<Item>
  extends Partial<DataBrowserState<Item>> {
  type: StateChangeTypes
}

export interface Actions<Item> {
  // todo params
  switchViewType: () => void,
  switchColumns: () => void,
  checkboxState: () => void,
  offsetColumns: () => void,
  checkboxToggle: () => void,
  onSelection: () => void,
  changeSortDirection: () => void,
  defaultSortMethod: () => void,
  sortData: () => void,
  activeSort: () => void,
  replaceColumnFlex: () => void,
}

export type ControllerStateAndHelpers<Item> = DataBrowserState<Item> & Actions<Item>

export type ChildrenFunction<Item> = (
  options: ControllerStateAndHelpers<Item>,
) => React.ReactNode

export type DataBrowserInterface<Item> = React.ComponentClass<
  DataBrowserProps<Item>
> & {
  stateChangeTypes: {
    deselectAll: StateChangeTypes.deselectAll
    selectAll: StateChangeTypes.selectAll
    checkboxToggle: StateChangeTypes.checkboxToggle
    switchColumns: StateChangeTypes.switchColumns
    switchView: StateChangeTypes.switchView
    sortData: StateChangeTypes.sortData
    onItemClick: StateChangeTypes.onItemClick
    replaceColumnFlex: StateChangeTypes.replaceColumnFlex
    changeSortDirection: StateChangeTypes.changeSortDirection
  }
}

declare const DataBrowser: DataBrowserInterface<any>

export default DataBrowser
