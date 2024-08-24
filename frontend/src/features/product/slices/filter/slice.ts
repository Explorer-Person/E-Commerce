import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DeterminedPriceIF, FilterStateIF } from "./interface";

const initialState: FilterStateIF = {
  filterDatas: {
    categories: [],
    weight: "",
    searchText: "",
    discountStatus: "",
    rangedPrice: {
      min: 0,
      max: 0,
    },
  },
};

export const filterSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectCategories: (state, action: PayloadAction<string>) => {
      const existsIndex = state.filterDatas.categories.indexOf(action.payload);
      console.log(existsIndex);
      if(existsIndex !== -1){
        state.filterDatas.categories.splice(existsIndex, 1);
      }else{
        state.filterDatas.categories.push(action.payload);
      }    
    },
    selectDiscountStatus: (state, action: PayloadAction<string>) => {
      state.filterDatas.discountStatus = action.payload;
    },
    selectWeight: (state, action: PayloadAction<string>) => {
      state.filterDatas.weight = action.payload;
    },
    determinePrice: (state, action: PayloadAction<DeterminedPriceIF>) => {
      state.filterDatas.rangedPrice = action.payload;
    },
    searchElement: (state, action: PayloadAction<string>) => {
      state.filterDatas.searchText = action.payload;
    },
  },
});

export const {
  selectCategories,
  selectDiscountStatus,
  selectWeight,
  determinePrice,
  searchElement,
} = filterSlice.actions;
export default filterSlice.reducer;
