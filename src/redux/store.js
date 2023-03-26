import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import {combineReducers} from 'redux';
import episodeReducer from './state/episodeState';
import favoriteReducer from './favoriteSlice';
import charactersReducer from './state/charactersSlice';
import characterDetailReducer from './state/characterDetailSlice';

const reducers = combineReducers({
  episode: episodeReducer,
  favorite: favoriteReducer,
  characters: charactersReducer,
  characterDetail: characterDetailReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favorite'],
  blacklist: ['episode', 'characters', 'characterDetail'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
