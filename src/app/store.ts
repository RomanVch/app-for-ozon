import { configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { calculateImgReducer } from '../page/Calculate-Img/Redux/calculateImgReducer';
import { calculateKitReducer } from '../page/Calculate-kit/Redux/calculateKitReducer';
import { homeReducer } from '../page/Home/Redux/HomeReducer';
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    calculateImg: calculateImgReducer,
    calculateKit: calculateKitReducer,
    home: homeReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  devTools: true
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the app itself
export type RootStateType = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
