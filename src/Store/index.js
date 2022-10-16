import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authSlice from './authSlice';
import layoutSlice from './layoutSlice';
import recipeSlice from './recipeSlice';


const persistConfig = {
    key: 'recipeStore',
    storage
}

const rootReducer = combineReducers({ 
    authReducer: authSlice.reducer,
    layoutReducer: layoutSlice.reducer,
    recipeReducer: recipeSlice.reducer
  })

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({  
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: process.env.NODE_ENV !== 'production'
})

export const authActions = authSlice.actions;
export const layoutActions = layoutSlice.actions;
export const recipeActions = recipeSlice.actions;

export default store;
export const persistor = persistStore(store);
