import { createSlice } from "@reduxjs/toolkit";

const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: savedFavorites,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const camper = action.payload;
      const exists = state.items.find((item) => item.id === camper.id);

      if (exists) {
        state.items = state.items.filter((item) => item.id !== camper.id);
      } else {
        state.items.push(camper);
      }

      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
    clearFavorites: (state) => {
      state.items = [];
      localStorage.removeItem("favorites");
    },
  },
});

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

export const selectFavorites = (state) => state.favorites.items;
