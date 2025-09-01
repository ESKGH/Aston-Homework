/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  [key: string]: any; 
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => 'users',
      providesTags: (users) =>
        users
          ? [
              ...users.map(({ id }) => ({ type: 'Users' as const, id })),
              { type: 'Users', id: 'LIST' },
            ]
          : [{ type: 'Users', id: 'LIST' }],
    }),
    getUserById: builder.query<User, number>({
      query: (id) => `users/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Users', id }],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi;

