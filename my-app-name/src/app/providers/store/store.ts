import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from '../../../entities/post/api/postsApi';
import { usersApi } from '../../../entities/user/api/usersApi';
import { albumsApi } from '../../../entities/albums/api/albumsApi';
import { todosApi } from '../../../entities/todo/api/todosApi';
import { commentsApi } from '../../../entities/comment/api/commentsApi';
import { postSlice } from '../../../entities/post/model/postSlice';
import userSlice from '../../../entities/user/model/userSlice';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer, 
    posts: postSlice.reducer,
    users: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      postsApi.middleware,
      usersApi.middleware,
      albumsApi.middleware,
      todosApi.middleware,
      commentsApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

