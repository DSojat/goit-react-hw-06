import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'name',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
