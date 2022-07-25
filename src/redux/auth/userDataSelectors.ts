import type { RootState } from '../store';

export const getIsLogged = (state: RootState) => state.userData.isLogged;
export const getToken = (state: RootState) => state.userData.token;
export const getUserEmail = (state: RootState) => state.userData.user.email;
export const getUserName = (state: RootState) => state.userData.user.name;
