import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import { contactsReducer } from './contactsSlice.js';
import { filtersReducer  } from './filterSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

const persistConfig = {
    key: 'contacts',
  storage,
  whitelist: ['contacts']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);
