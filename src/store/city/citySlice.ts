import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CityStateStructure, CordsStructure } from "./types";

export const initialCityState: CityStateStructure = {
  city: "",
  cords: {
    lat: "",
    lng: "",
  },
};

const citySlice = createSlice({
  name: "city",
  initialState: initialCityState,
  reducers: {
    loadCity: (
      currentCity,
      action: PayloadAction<string>,
    ): CityStateStructure => ({
      ...currentCity,
      city: action.payload,
    }),
    loadCords: (
      currentCity,
      action: PayloadAction<CordsStructure>,
    ): CityStateStructure => ({
      ...currentCity,
      cords: action.payload,
    }),
    deleteCity: (): CityStateStructure => ({
      ...initialCityState,
    }),
  },
});

export const {
  loadCity: loadCityActionCreator,
  loadCords: loadCordsActionCreator,
  deleteCity: deleteCityActionCreator,
} = citySlice.actions;

export const cityReducer = citySlice.reducer;
