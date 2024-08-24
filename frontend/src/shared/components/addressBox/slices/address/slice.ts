import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddressStateIF } from "./interface";
import { AddressIF } from "@src/shared/interfaces";

const initialState: AddressStateIF = {
  addressesLength: 0,
  addresses: [],
  address: {
    id: "",
    country: "",
    city: "",
    district: "",
    street: "",
    buildingNumber: "",
    neighborhood: "",
    postalCode: "",
    addressType: "",
    openAddress: "",
    isSelected: 0,
  },
};

const addressSlice = createSlice({
  name: "addressReducers",
  initialState,
  reducers: {
    storeAddresses: (state, action: PayloadAction<AddressIF[]>) => {
      state.addresses = action.payload;
    },
    setAddressesLength: (state, action: PayloadAction<number>) => {
      state.addressesLength = action.payload;
    },
    storeAddress: (state, action: PayloadAction<AddressIF>) => {
      state.address = action.payload;
    },
    deleteAddressUI: (state, action: PayloadAction<string>) => {
      state.addresses = state.addresses.filter(
        (address) => Number(address.id) !== Number(action.payload)
      );
    },
    deleteAddressesUI: (state) => {
      state.addresses = [];
      state.addressesLength = 0;
    },
    updateAddressUI: (state, action: PayloadAction<AddressIF>) => {
      return {
        ...state,
        addresses: state.addresses.map((address) => {
          if (address.id === action.payload.id) {
            return action.payload;
          }
          return address;
        }),
      };
    },
  },
});

export const {
  storeAddresses,
  storeAddress,
  deleteAddressUI,
  updateAddressUI,
  deleteAddressesUI,
  setAddressesLength,
} = addressSlice.actions;
export default addressSlice.reducer;
