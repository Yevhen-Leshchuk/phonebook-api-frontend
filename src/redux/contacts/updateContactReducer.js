import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
};

const updateSlice = createSlice({
  name: 'updateContact',
  initialState: initialState,
  reducers: {
    updateContact: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { updateContact } = updateSlice.actions;
export const updateReducer = updateSlice.reducer;
