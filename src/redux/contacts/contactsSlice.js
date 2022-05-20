import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = 'https://connections-api.herokuapp.com';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseURL}` }),
  tagTypes: ['Contact'],

  endpoints: builder => ({
    fetchContacts: builder.query({
      query: token => ({
        url: '/contacts',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['Contact'],
    }),

    addContact: builder.mutation({
      query: ({ name, number, token }) => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name,
          number,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: ({ id, token }) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Contact'],
    }),

    updateContact: builder.mutation({
      query: ({ name, number, token, id }) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body: {
          name,
          number,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactApi;
