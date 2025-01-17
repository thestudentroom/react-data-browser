declare type Column = {
    sortField?: string;
    isLocked?: boolean;
};
export declare type Props = {
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
    initialSort: {
        dir: string;
        sortField: string;
    };
    initialColumnFlex: string[];
    initialChecked: string[];
    totalItems: number;
    columns: Column[];
    views: string[];
    initialView: string;
};
export declare type CheckboxAllState = 'all' | 'none' | 'some' | string;
export declare type State = {
    columnFlex: string[] | string[][] | any;
    availableColumnFlex: null | string[];
    visibleColumns: Column[];
    viewType?: string;
    selectAllCheckboxState: CheckboxAllState;
    currentSort: any;
    checkedItems: string[];
    getColumns: () => Column[] | void;
    getViews: () => string[] | void;
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
export {};
