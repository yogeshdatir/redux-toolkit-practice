import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTodos = createAsyncThunk('todos/getTodos', async (thunkAPI) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue({ error: err.message });
  }
});
