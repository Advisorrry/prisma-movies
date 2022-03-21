import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const theMoviedbApi = createApi({
  reducerPath: 'moviedbApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URl }),
  endpoints: (builder) => ({
    getMoviesList: builder.query<any, { category: string; page: number }>({
      query: (arg) => {
        const { category, page } = arg
        return {
          url: `movie/${category}?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU&page=${page}`,
        }
      },
    }),
  }),
})

export const { useGetMoviesListQuery } = theMoviedbApi
