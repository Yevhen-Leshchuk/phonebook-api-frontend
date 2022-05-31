import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
};

const updateContactSlice = createSlice({
  name: 'updateContact',
  initialState: initialState,
  reducers: {
    updateContact: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { updateContact } = updateContactSlice.actions;
export const updateContactReducer = updateContactSlice.reducer;
