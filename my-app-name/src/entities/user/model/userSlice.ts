import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from '../../../app/providers/store/store';
import type { User } from '../api/usersApi';

const usersAdapter = createEntityAdapter<User>();

const userSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState(),
  reducers: {
    setUsers: usersAdapter.setAll,
    addUser: usersAdapter.addOne,
  },
});

export const { setUsers, addUser } = userSlice.actions;

export const userSelectors = usersAdapter.getSelectors<RootState>(
  (state) => state.users
);

export default userSlice.reducer;

