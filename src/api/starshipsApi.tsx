import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const starWarsApi = createApi({
  reducerPath: 'starWars',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/starships/' }),

  endpoints: (builder) => ({
    getStarshipList: builder.query({
      query: () => '',
    }),

    getStarshipsPage: builder.query({
      query: (page) => `?page=${page}`,
    }),
  }),
});

export const { useGetStarshipListQuery, useLazyGetStarshipsPageQuery } =
  starWarsApi;
