import { combineReducers, configureStore } from '@reduxjs/toolkit';

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

// slices
import globalSlice from '@/Redux/features/globalSlice';
import userAuthSlice from '@/Redux/features/userAuthSlice';
import forgotPasswordSlice from '@/Redux/features/forgotPasswordSlice';
import { apiSLice } from '@/Api/apiSlice';

const allReducers = combineReducers({
  globalSlice,
  userAuthSlice,
  forgotPasswordSlice,
  [apiSLice.reducerPath]: apiSLice.reducer,
});

const mainStores = () =>
  configureStore({
    reducer: allReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(apiSLice.middleware), // concat RTK middleware
  });

export const makeStore = () => {
  //  Check to confirm if we are on client side to persist, because we don't need to persist on server side
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return mainStores;
  } else {
    // We need to persist on client side

    const persistConfig = {
      key: 'IlemiWebsite',
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, allReducers);

    let store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }).concat(apiSLice.middleware),
    });

    store._persistor = persistStore(store);

    return store;
  }
};

const store = makeStore();
export default store;
