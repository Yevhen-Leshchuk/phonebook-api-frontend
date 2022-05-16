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
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import logger from 'redux-logger';
import { contactApi } from './contacts/contactsSlice';
import { authApi } from './auth/authSlice';
import { updateReducer } from './contacts/updateContactReducer';

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactApi.middleware,
  // logger,
];

const authPersistConfig = {
  key: 'Auth',
  storage,
  stateReconciler: hardSet,
};

const updateContactPersistConfig = {
  key: 'updateContact',
  storage,
  whitelist: ['id'],
};

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    [authApi.reducerPath]: persistReducer(authPersistConfig, authApi.reducer),
    updateReducer: persistReducer(updateContactPersistConfig, updateReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export const persistor = persistStore(store);
