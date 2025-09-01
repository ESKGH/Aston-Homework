/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Albums'],
  endpoints: (builder) => ({
    getUserAlbums: builder.query<Album[], number>({
      query: (userId) => `users/${userId}/albums`,
      providesTags: (_albums) => [{ type: 'Albums', id: 'LIST' }],
    }),
  }),
});

export const { useGetUserAlbumsQuery } = albumsApi;
