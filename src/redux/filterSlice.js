import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
