import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MovieList, MovieDetails, Category } from './types'

export const moviedb_filmsApi = createApi({
  reducerPath: 'moviedb_filmsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URl }),
  endpoints: (builder) => ({
    getMoviesList: builder.query<MovieList, { category: Category | string; page: number }>({
      query: ({ category, page }) => {
        return {
          url: `movie/${category}?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU&page=${page}`,
        }
      },
    }),
    getMovieDetails: builder.query<MovieDetails, { movieId: string }>({
      query: ({ movieId }) => {
        return {
          url: `movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU`,
        }
      },
    }),
  }),
})

export const { useGetMoviesListQuery, useGetMovieDetailsQuery } = moviedb_filmsApi
