import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MapDataIF } from "./interface";
// import { storeAddressData } from "@src/features";

const initialState: MapDataIF = {
  coords: {lat: 0, lon: 0},
  zoom: 13,
  geoError: "",
  searchResults: [],
  searchQuery: "",
  suggests: [],
};

const mapDataSlice = createSlice({
  name: "mapData",
  initialState,
  reducers: {
    storeCoords: (state, action: PayloadAction<{lat: number, lon: number}>) => {
      state.coords = action.payload;
    },
    storeZoom: (state, action: PayloadAction<number>) => {
      state.zoom = action.payload;
    },
    storeGeoError: (state, action: PayloadAction<string>) => {
      state.geoError = action.payload;
    },
    storeSearchResults: (state, action: PayloadAction<{ position: { lat: number, lon: number } }[]>) => {
      state.searchResults = action.payload;
    },
    storeSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    storeSuggests: (state, action: PayloadAction<{ address: { freeformAddress: string }, poi: { name: string } }[]>) => {
      state.suggests = action.payload;
    },

  },
});

export const {
  storeCoords,
  storeGeoError,
  storeSearchQuery,
  storeSearchResults,
  storeSuggests,
  storeZoom,
} = mapDataSlice.actions;
export default mapDataSlice.reducer;
