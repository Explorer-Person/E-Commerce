import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryStateIF } from "./interface";

const initialState: CategoryStateIF = {
  isLoading: false,
  processStatus: "get",
};

const profileActionsSlice = createSlice({
  name: "profileActions",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    resetLoading: (state) => {
      state.isLoading = false;
    },
    setProcess: (state, action: PayloadAction<string>) => {
      state.processStatus = action.payload;
    },
  },
});

export const { startLoading, resetLoading, setProcess } =
  profileActionsSlice.actions;
export default profileActionsSlice.reducer;
