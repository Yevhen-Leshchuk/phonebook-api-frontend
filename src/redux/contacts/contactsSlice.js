import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = 'https://627396aa3d2b5100741e50b6.mockapi.io/api/v1/';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseURL}` }),
  tagTypes: ['Contact'],

  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),

    addContact: builder.mutation({
      query: ({ name, phone }) => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name,
          phone,
        },
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactApi;
