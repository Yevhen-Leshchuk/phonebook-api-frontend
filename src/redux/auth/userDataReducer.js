import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogged: false,
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState: initialState,
  reducers: {
    actionToken: (state, action) => {
      state.token = action.payload;
    },
    actionUser: (state, action) => {
      state.user = action.payload;
    },
    loggedOn: (state, action) => {
      state.isLogged = true;
    },
    loggedOut: (state, action) => {
      state.isLogged = false;
      state.token = '';
      state.user = { name: null, email: null };
    },
  },
});

export const { actionToken, actionUser, loggedOn, loggedOut } =
  userDataSlice.actions;
export const userDataReducer = userDataSlice.reducer;
