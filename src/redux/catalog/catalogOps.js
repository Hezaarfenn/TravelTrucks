import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchAll",
  async (filters = {}, thunkAPI) => {
    try {
      const queryParams = new URLSearchParams(filters).toString();
      const { data } = await axios.get(`/?${queryParams}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchTruckById = createAsyncThunk(
  "catalog/fetchById",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
