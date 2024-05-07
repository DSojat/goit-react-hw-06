import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    setFilterValue(state, action) {
      state.value = action.payload;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { setFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
