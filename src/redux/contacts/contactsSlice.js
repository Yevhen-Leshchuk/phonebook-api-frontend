import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';
import { changeFilter } from './contacts-actions';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '', loading: false, error: null },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.loading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.items = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.error = payload;
    },
    [addContact.pending](state) {
      state.loading = true;
    },
    [addContact.fulfilled](state, { payload }) {
      state.items.push(payload);
    },
    [addContact.rejected](state, { payload }) {
      state.error = payload;
    },
    [deleteContact.pending](state) {
      state.loading = true;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    [deleteContact.rejected](state, { payload }) {
      state.error = payload;
    },
    [changeFilter](state, { payload }) {
      state.filter = payload;
    },
  },
});

export default contactSlice.reducer;
