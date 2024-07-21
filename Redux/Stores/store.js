import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit';

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
import globalSlice from '../Features/globalSlice';
import userAuthSlice from '../Features/userAuthSlice';
import userDatasSlice from '../Features/userDatasSlice';
import notifsSlice from '../Features/notifsSlice';
import { apiSLice } from '@/Api/apiSlice';
import createPropertySlice from '../Features/createPropertySlice';

const rootReducers = combineReducers({
  createPropertySlice,
  globalSlice,
  notifsSlice,
  userAuthSlice,
  userDatasSlice,

  [apiSLice.reducerPath]: apiSLice.reducer,
});

const persistConfig = {
  key: 'property4u-tenant',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSLice.middleware),
});

let persistor;
if (typeof window !== 'undefined') {
  persistor = persistStore(store);
}

export { persistor };
