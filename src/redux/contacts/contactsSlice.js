import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';
import { changeFilter } from './contacts-actions';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    loading: false,
    adding: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.loading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.items = payload;
      state.loading = false;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
    [addContact.pending](state) {
      state.adding = true;
    },
    [addContact.fulfilled](state, { payload }) {
      state.items.push(payload);
      state.adding = false;
    },
    [addContact.rejected](state, { payload }) {
      state.error = payload;
      state.adding = false;
    },
    [deleteContact.pending](state) {
      state.loading = false;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.items = state.items.filter(({ id }) => id !== payload);
      state.loading = false;
    },
    [deleteContact.rejected](state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
    [changeFilter](state, { payload }) {
      state.filter = payload;
    },
  },
});

export default contactSlice.reducer;
