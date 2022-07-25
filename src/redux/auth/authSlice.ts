import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../store';

const baseURL = 'https://connections-api.herokuapp.com';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseURL}`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).userData?.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['Auth'],

  endpoints: builder => ({
    fetchCurrentUser: builder.query({
      query: token => ({
        url: `/users/current`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      // @ts-ignore
      providesTags: ['Contact'],
    }),

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
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  useFetchCurrentUserQuery,
  useRegisterMutation,
  useLogInMutation,
  useLogOutMutation,
} = authApi;
