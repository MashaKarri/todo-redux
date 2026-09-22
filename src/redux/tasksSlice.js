import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducer: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
