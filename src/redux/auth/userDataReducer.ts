import { createSlice } from '@reduxjs/toolkit';

type SliceState = {
  user: { name: null | string; email: null | string };
  token: string;
  isLogged: boolean;
};

const initialState: SliceState = {
  user: { name: null, email: null },
  token: '',
  isLogged: false,
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    actionToken: (state, action) => {
      state.token = action.payload;
    },
    actionUser: (state, action) => {
      state.user = action.payload;
    },
    loggedOn: (state, _) => {
      state.isLogged = true;
    },
    loggedOut: (state, _) => {
      state.isLogged = false;
      state.token = '';
      state.user = { name: null, email: null };
    },
  },
});

export const { actionToken, actionUser, loggedOn, loggedOut } =
  userDataSlice.actions;
export const userDataReducer = userDataSlice.reducer;
