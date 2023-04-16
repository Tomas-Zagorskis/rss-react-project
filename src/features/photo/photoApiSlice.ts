import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Basic } from 'unsplash-js/dist/methods/photos/types';

const ACCESS_KEY = 'IwPVCsyOMtoPOxmsSvumTW5JKCC16zgOlCwNF054xi4';

type PhotosResponse = {
  results: Basic[];
  total: number;
  total_pages: number;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com',
    prepareHeaders(headers) {
      headers.set('Authorization', `Client-ID ${ACCESS_KEY}`);
      headers.set('Accept-Version', 'v1');
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      getPhotos: builder.query<PhotosResponse, string>({
        query: (search: string) => {
          if (search === '') {
            return '/photos?page=1';
          }
          return `/search/photos?query=${search}&page=1`;
        },
      }),
    };
  },
});

export const { useGetPhotosQuery } = apiSlice;
