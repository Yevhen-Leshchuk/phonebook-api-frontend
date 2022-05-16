import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = 'https://connections-api.herokuapp.com';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseURL}` }),

  tagTypes: ['Auth'],

  endpoints: builder => ({
    register: builder.mutation({
      query: ({ name, email, password }) => ({
        url: '/users/signup',
        method: 'POST',
        body: {
          name,
          email,
          password,
        },
      }),
      invalidatesTags: ['Auth'],
    }),

    logIn: builder.mutation({
      query: ({ email, password }) => ({
        url: '/users/login',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
      invalidatesTags: ['Auth'],
    }),

    logOut: builder.mutation({
      query: token => ({
        url: '/users/logout',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  // useFetchContactsQuery,
  useRegisterMutation,
  useLogInMutation,
  useLogOutMutation,
} = authApi;
