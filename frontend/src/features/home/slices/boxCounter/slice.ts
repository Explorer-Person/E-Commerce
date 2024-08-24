import { createSlice } from "@reduxjs/toolkit";
import { BoxCounterIF } from "./interface";

const initialState: BoxCounterIF = {
  productArray: [],
};

export const boxCounter = createSlice({
  name: "boxCounter",
  initialState,
  reducers: {
    // arrayFiller: (state, action: PayloadAction<number>) => {
    //   const newArray = [];
    //   for (let i: number = 0; i < action.payload; i++) {
    //      newArray.push(i);
    //   }
    //    state.productArray = newArray;
    // },
  },
});


// export const { arrayFiller } = boxCounter.actions;
export default boxCounter.reducer;