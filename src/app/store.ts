import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { calculateImgReducer } from '../page/Calculate-Img/Redux/calculateImgReducer';
import { calculateKitReducer } from '../page/Calculate-kit/Redux/calculateKitReducer';
import { homeReducer } from '../page/Home/Redux/HomeReducer';

const sagaMiddleware = createSagaMiddleware();

// Функция для загрузки состояния из localStorage (если оно есть)
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Функция для сохранения состояния в localStorage
const saveState = (state:RootStateType) => {
  try {
    const serializedState = JSON.stringify({
      calculateKit: state.calculateKit,
    });
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    // Обработка ошибки сохранения состояния
  }
};

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    calculateImg: calculateImgReducer,
    calculateKit: calculateKitReducer,
    home: homeReducer,
  },
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: true,
});

store.subscribe(() => {
  saveState(store.getState());
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the app itself
export type RootStateType = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
