import { configureStore } from '@reduxjs/toolkit';
import searchReducer from 'features/search/searchSlice';
import { apiSlice } from 'features/unsplash/unsplashApi';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
