import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { contactApi } from './contacts/contactsSlice';
import { authApi } from './auth/authSlice';
import { updateContactReducer } from './contacts/updateContactReducer';
import { userDataReducer } from './auth/userDataReducer';

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactApi.middleware,
  authApi.middleware,
  logger,
];

const userDataPersistConfig = {
  key: 'userData',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    updateContact: updateContactReducer,
    userData: persistReducer(userDataPersistConfig, userDataReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export const persistor = persistStore(store);
