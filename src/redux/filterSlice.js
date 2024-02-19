import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filter(state, { payload }) {
      return (state = payload);
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { filter } = filterSlice.actions;
