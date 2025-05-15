import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalog, fetchTruckById } from "./catalogOps";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    items: [],
    selectedTruck: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      //fetchCatalog
      .addCase(fetchCatalog.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //fetchTruckById
      .addCase(fetchTruckById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.selectedTruck = null;
      })
      .addCase(fetchTruckById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedTruck = action.payload;
      })
      .addCase(fetchTruckById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default catalogSlice.reducer;
