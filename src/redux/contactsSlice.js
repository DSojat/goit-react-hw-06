import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    fetchContacts(state, action) {
      return (state = action.payload);
    },
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact, fetchContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
