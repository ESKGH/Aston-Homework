import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Comments'],
  endpoints: (builder) => ({
    getPostComments: builder.query<Comment[], number>({
      query: (postId) => `posts/${postId}/comments`,
      providesTags: (_comments, _error, postId) => [{ type: 'Comments', id: postId }],
    }),
    addComment: builder.mutation<Comment, Partial<Comment>>({
      query: (body) => ({
        url: 'comments',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetPostCommentsQuery,
  useAddCommentMutation,
} = commentsApi;
