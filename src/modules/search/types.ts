/**
 * Search Types
 */

export type FilterListProps = {
  text: string;
  case: string;
};

export type ToggleProps = {
  filterList: FilterListProps;
  onSort: (active: boolean) => void;
};