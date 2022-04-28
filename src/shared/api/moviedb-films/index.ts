import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MovieList, MovieDetails } from './types'

export const moviedb_filmsApi = createApi({
  reducerPath: 'moviedb_filmsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URl }),
  endpoints: (builder) => ({
    getMoviesList: builder.query<MovieList, { category: string; page: number }>({
      query: (arg) => {
        const { category, page } = arg
        return {
          url: `movie/${category}?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU&page=${page}`,
        }
      },
    }),
    getMovieDetails: builder.query<MovieDetails, { movieId: number }>({
      query: (arg) => {
        const { movieId } = arg
        return {
          url: `movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU`,
        }
      },
    }),
  }),
})

export const { useGetMoviesListQuery, useGetMovieDetailsQuery } = moviedb_filmsApi
