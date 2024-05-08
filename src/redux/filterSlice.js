import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'name',
  initialState: {
    value: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.value = action.payload;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
