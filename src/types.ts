type Column = {
  sortField?: string;
  isLocked?: boolean;
};

export type Props = {
  stateReducer: Function;
  onStateChange: Function;
  onSwitchColumns: Function;
  onSwitchViewType: Function;
  onChangeSortDirection: Function;
  onSortData: Function;
  onReplaceColumnFlex: Function;
  onToggleSortDirection: Function;
  onDeselectAll: Function;
  onSelectAll: Function;
  onCheckboxToggle: Function;
  onToggleSort: Function;
  initialSort: { dir: string; sortField: string };
  viewsAvailable: string[];
  initialColumnFlex: string[];
  initialChecked: string[];
  totalItems: number;
  columns: Column[];
};

export type State = {
  columnFlex: string[];
  availableColumnFlex: null | string[];
  visibleColumns: Column[];
  viewType: string;
  selectAllCheckboxState: boolean;
  currentSort: any;
  checked: string[];
  getColumns: Column[];
  getViews: Function;
  switchViewType: Function;
  switchColumns: Function;
  checkboxState: Function;
  offsetColumns: Function;
  checkboxToggle: Function;
  onSelection: Function;
  changeSortDirection: Function;
  defaultSortMethod: Function;
  sortData: Function;
  activeSort: Function;
  replaceColumnFlex: Function;
  toggleSort: Function;
};
