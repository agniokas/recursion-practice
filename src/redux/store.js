import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  // persistedReducer,
  reducer,
  composeWithDevTools()
);
export const persistor = persistStore(store);

export default store;
