export interface FilterStateIF {
  filterDatas: FilterDatasIF;
}

export interface FilterDatasIF {
  categories: string[];
  searchText: string;
  discountStatus: string;
  weight: string;
  rangedPrice: DeterminedPriceIF;
}

export interface DeterminedPriceIF {
  min: number;
  max: number;
}
