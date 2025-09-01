import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../../app/providers/store/store';
import type { Post } from '../../../widgets/PostList/PostList';

const postsAdapter = createEntityAdapter<Post>();

export const postSlice = createSlice({
  name: 'posts',
  initialState: postsAdapter.getInitialState(),
  reducers: {
    addManyPosts: postsAdapter.addMany,
    addOnePost: postsAdapter.addOne,
    updatePost: postsAdapter.updateOne,
    removePost: postsAdapter.removeOne,
  },
});

export const { addManyPosts, addOnePost, updatePost, removePost } = postSlice.actions;

export const postsSelectors = postsAdapter.getSelectors<RootState>(
  (state) => state.posts
);

