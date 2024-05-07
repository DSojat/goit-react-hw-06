import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    selectContacts(state, action) {
      return (state = action.payload);
    },
    addContactValue(state, action) {
      state.push(action.payload);
    },
    deleteContactValue(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { addContactValue, deleteContactValue, selectContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
