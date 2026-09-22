import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6ab2a1e15b9b60f39d34f577.mockapi.io/todo";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");
      console.log(response.data)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
