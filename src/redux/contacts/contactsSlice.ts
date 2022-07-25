import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../store';
import IContacts from '../../interfaces/Contacts.interface';

const baseURL = 'https://connections-api.herokuapp.com';

export const contactApi = createApi({
  reducerPath: 'contactApi',
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
  tagTypes: ['Contact'],

  endpoints: builder => ({
    fetchContacts: builder.query<IContacts[], void>({
      query: () => ({
        url: '/contacts',
        method: 'GET',
      }),

      providesTags: ['Contact'],
    }),

    addContact: builder.mutation({
      query: ({ name, number }) => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name,
          number,
        },
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),

    updateContact: builder.mutation({
      query: ({ name, number, id }) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body: {
          name,
          number,
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
