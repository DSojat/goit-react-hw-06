import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'items',
  initialState: {
    value: [],
  },
  reducers: {
    fetchContacts(state, action) {
      state.value = action.payload;
    },
    addContact(state, action) {
      state.value.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.value.findIndex(
        contact => contact.id === action.payload
      );
      state.value.splice(index, 1);
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact, fetchContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
