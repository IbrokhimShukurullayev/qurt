// store.js

import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/index'; // Adjust the import path as per your project structure

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
