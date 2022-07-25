import { createSlice } from '@reduxjs/toolkit';

type SliceState = {
  id: string;
};

const initialState: SliceState = {
  id: '',
};

const updateContactSlice = createSlice({
  name: 'updateContact',
  initialState,
  reducers: {
    updateContact: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { updateContact } = updateContactSlice.actions;
export const updateContactReducer = updateContactSlice.reducer;
