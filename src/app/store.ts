import { configureStore } from '@reduxjs/toolkit';
import searchReducer from 'features/search/searchSlice';
import musicReducer from 'features/music/musicSlice';
import { apiSlice } from 'features/photo/photoApiSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    music: musicReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
