export interface FilterObject {
  text: string;
}

export interface AtomFilterListFieldProps {
  selectedFilterText: string;
  cleanFilterText: string;
  filterText: FilterObject[];
  onClick: () => void;
  mobileText: string
}
