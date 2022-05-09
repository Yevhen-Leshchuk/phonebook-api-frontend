import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';
import { contactApi } from './contacts/contactsSlice';

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactApi.middleware,
  logger,
];

const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export default store;
