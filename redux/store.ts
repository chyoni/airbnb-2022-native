import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

//! rootReducer가 어떤 변화가 있을때마다 저장할 것을 의미하는 statement
//! 그래서 아래 configureStore에서 reducer를 rootReducer에서 이 persistedReducer로 변경
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  //! 아래 부분은 Redux toolkit과 Redux persist가 충돌이 나기 때문에 그것을 방지하기 위해 작성하는 것
  //! Redux toolkit에게 Redux persist의 모든 action들을 ignore하라는 의미
  //! 어차피 Redux toolkit의 action들을 사용할것이기 때문에 상관 X
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

//! reducer뿐만 아니라 store도 persist하게 만들어줘야 햐기 때문에 이와 같이 작성
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default store;
