import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConfirmBoxStateIF } from "./interface";


const initialState: ConfirmBoxStateIF = {
  boxStatus: false,
};

const confirmBoxSlice = createSlice({
  name: "confirmBoxActions",
  initialState,
  reducers: {
    setBoxStatus: (state, action: PayloadAction<boolean>) => {
      state.boxStatus = action.payload;
    },
  },
});

export const { setBoxStatus } =
confirmBoxSlice.actions;
export default confirmBoxSlice.reducer;
