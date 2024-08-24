import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InfoStateIF } from "./interface";

const initialState: InfoStateIF = {
  pageNumber: 1,
  pageState: {
    AddressInput: "opacity-1 d-block",
    CardInput: "opacity-0 d-none",
    OrderInput: "opacity-0 d-none",
    isActive: "address",
  },
};


const infoSlice = createSlice({
  name: "infoSlice",
  initialState,
  reducers: {
    pageRegulative: (state, action: PayloadAction<number | null>) => {
      const page = action.payload !== null ? action.payload : state.pageNumber;
      if (page === 1) {
        state.pageState = {
          AddressInput: "opacity-1 d-block",
          CardInput: "opacity-0 d-none",
          OrderInput: "opacity-0 d-none",
          isActive: "address",
        };
      } else if (page === 2) {
        state.pageState = {
          AddressInput: "opacity-0 d-none",
          CardInput: "opacity-1 d-block",
          OrderInput: "opacity-0 d-none",
          isActive: "payment",
        };
      } else if (page === 3) {
        state.pageState = {
          AddressInput: "opacity-0 d-none",
          CardInput: "opacity-0 d-none",
          OrderInput: "opacity-1 d-block",
          isActive: "order",
        };
      }
    },
    pageNumberAdjuster: (state, action: PayloadAction<string>) => {
      if (action.payload) {   
          if (action.payload === "next") {
            if (state.pageNumber === 3) {
              state.pageNumber = 1;
            } else {
              state.pageNumber += 1;
            }
          } else if (action.payload === "prev") {
            if (state.pageNumber === 1) {
              state.pageNumber = 3;
            } else {
              state.pageNumber -= 1;
            }
          }
      }
    },
  },
});

export const { pageNumberAdjuster, pageRegulative } = infoSlice.actions;
export default infoSlice.reducer;
