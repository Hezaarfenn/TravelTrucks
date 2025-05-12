import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  minPrice: "",
  maxPrice: null,
  rating: null,
  transmission: "",
  engine: "",
  form: "",

  amenities: {
    bathroom: false,
    kitchen: false,
    TV: false,
    AC: false,
    radio: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    water: false,
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload;

      if (key in state) {
        state[key] = value;
      } else if (key in state.amenities) {
        state.amenities[key] = value;
      }
    },
    resetFilters: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setFilter, resetFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
